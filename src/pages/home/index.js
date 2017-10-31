import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPage} from './action';
import ReactPaginate from 'react-paginate';
import ReactMarkdown from 'react-markdown';

import styles from'./home.scss';

@connect(mapStateToProps)
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            content: this.props.pages.content || [] ,
        }
    }
    componentDidMount(){
        this.props.dispatch(getPage());

    }
    componentWillReceiveProps(nextProps){

        this.setState({
            content:nextProps.pages.content,
        })
    }
    render(){
        return(
            <div>
                <h2>Home</h2>
                {
                    this.state.content.map((v,i)=>{
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