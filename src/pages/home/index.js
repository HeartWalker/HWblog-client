import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import {connect} from 'react-redux';
import {getPage} from './action';
import ReactPaginate from 'react-paginate';
import Article from '../article';

@connect(mapStateToProps)
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            pages: this.props.pages ,
        }
    }
    componentDidMonut(){
        this.props.dispatch(getPage());

    }
    componentWillReceiveProps(nextProps){
        let pages = [];

        this.setState({
            pages,
        })
    }
    render(){
        return(
            <div>
                <h2>Home</h2>
                {
                   /* this.state.pages.map((v,i)=>{
                        return <div className="mtb15 bgf" key={v} >

                        </div>
                    })*/
                }
                <ReactPaginate previousLabel={"previous"}
                               nextLabel={"next"}
                               breakLabel={<a href="">...</a>}
                               breakClassName={"break-me"}
                               pageCount={100}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               //onPageChange={this.handlePageClick}
                               containerClassName={"pagination"}
                               subContainerClassName={"pages pagination"}
                               activeClassName={"active"} />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        pages: state.pageStore.pages,
    }
}