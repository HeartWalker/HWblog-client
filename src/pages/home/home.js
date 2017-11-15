import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPage} from './action';
import ReactPaginate from 'react-paginate';
import {withRouter} from "react-router-dom";
import Content from './content';

@withRouter
@connect(mapStateToProps)
export default class Home extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.dispatch(getPage(0));
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
                    this.props.pages.content && this.props.pages.content.map((v,i)=>{
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
                               initialPage={0}
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