import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPage} from './action';
import ReactPaginate from 'react-paginate';
import {withRouter} from "react-router-dom";
import Content from './content';

@withRouter
@connect(mapStateToProps)
export default class Page extends Component{
    constructor(props){
        super(props);
        this.state = {
            content: this.props.pages.content ,
            initialPage: this.props.match.params.num - 1,//默认分页页码
        }
    }

    componentDidMount(){
        //解决刷新后获得当前页面数据问题
        let num = this.props.match.params.num - 1;
        this.props.dispatch(getPage(num));
    }

    componentWillReceiveProps(nextProps){
        let params = nextProps.match.params;
        let num = params.num;
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
        if(isNaN(data.selected) || data.selected === 0){    //reactpaginate 第一次会执行onPageChange事件,添加判断使浏览器显示正确的哈希值
            this.props.history.push(`/`);
            return;
        }
        let selected = data.selected + 1;
        this.props.history.push(`/page/${selected}`);

    };
    render(){
        return(
            <div>
                {
                    this.props.pages.content && this.state.content.map((v,i)=>{
                        return <Content key={v.time} value={v}/>
                    })
                }

                <ReactPaginate previousLabel={"previous"}
                               nextLabel={"next"}
                               breakLabel={<a href="">...</a>}
                               breakClassName={"break-me"}
                               pageCount={this.props.pages.length || 0}
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