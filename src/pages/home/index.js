import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPage} from './action';
import ReactPaginate from 'react-paginate';
import ReactMarkdown from 'react-markdown';
import {withRouter} from "react-router-dom";
import styles from'./home.scss';

@withRouter
@connect(mapStateToProps)
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            content: this.props.pages.content ,
            initialPage: this.props.match.params.num - 1,//默认分页页码
        }
    }

    componentDidMount(){
        //解决刷新后获得当前页面数据问题
        let num = this.props.match.params.num - 1 || 0;
        this.props.dispatch(getPage(num));
    }
    componentWillReceiveProps(nextProps){
        let num = nextProps.match.params.num;
        if(this.props.match.params.num != num){
            this.props.dispatch(getPage(num - 1));
        }
        this.setState({
            content:nextProps.pages.content,
        })
    }
    shouldComponentUpdate(nextProps, nextState){
        if(this.props.pages.content && this.props.pages.content[0].time === nextProps.pages.content[0].time){
            return false;
        }

        return true;
    }
    handlePageClick = (data) => {
        let selected = data.selected + 1;
        this.props.history.push(`/page/${selected}`);

    };
    render(){
        return(
            <div>
                {
                    this.props.pages.content && this.state.content.map((v,i)=>{
                        return <div className="mtb15 bgf" key={i} >
                            <div className={styles.title + ' clearfix'} >{v.title}
                                <span className={styles.date + ' fr'}>{v.date}</span>
                            </div>
                            <ReactMarkdown source={v.content || ''} />
                        </div>
                    })
                }

                <ReactPaginate previousLabel={"previous"}
                               nextLabel={"next"}
                               breakLabel={<a href="">...</a>}
                               breakClassName={"break-me"}
                               pageCount={this.props.pages.length}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination"}
                               subContainerClassName={"pages pagination"}
                               activeClassName={"active"}
                               initialPage={this.state.initialPage}
                />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        pages: state.pageStore.pages,
    }
}