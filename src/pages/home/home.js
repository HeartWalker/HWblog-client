import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPage} from './action';
import Content from './content';
import Pagingation from './pagination';

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

    render(){
        return(
            <div>
                {
                    this.props.pages.content && this.props.pages.content.map((v,i)=>{
                        return <Content key={v.time} value={v}/>
                    })
                }
                <Pagingation length={this.props.pages.length || 0} initialPage={0}/>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        pages: state.pageStore.pages,
    }
}