import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPage} from './action';
import Content from './content';
import Pagingation from './pagination';

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

    render(){
        return(
            <div>
                {
                    this.props.pages.content && this.state.content.map((v,i)=>{
                        return <Content key={v.time} value={v}/>
                    })
                }

                <Pagingation length={this.props.pages.length || 0} initialPage={this.state.initialPage}/>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        pages: state.pageStore.pages,
    }
}