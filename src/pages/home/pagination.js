
import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';
import {withRouter} from "react-router-dom";

@withRouter
export default class Pagingation extends Component {

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
            <ReactPaginate previousLabel={"previous"}
                           nextLabel={"next"}
                           breakLabel={<a href="">...</a>}
                           breakClassName={"break-me"}
                           pageCount={this.props.length}
                           marginPagesDisplayed={2}
                           pageRangeDisplayed={5}
                           onPageChange={this.handlePageClick}
                           containerClassName={"pagination"}
                           subContainerClassName={"pages pagination"}
                           activeClassName={"active"}
                           initialPage={this.props.initialPage}
            />
        )
    }
}