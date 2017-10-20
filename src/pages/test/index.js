
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {test} from './action';
import './test.scss';
class Test extends Component{
    constructor(props){
        super(props);
        //this.click = this.click.bind(this);
        this.state = {
            value: ''
        }
    }

    click = ()=>{
        this.props.dispatch(test(this.state.value));
    }
    change = (event) => {
        this.setState({
            value: event.target.value
        });
    }
    render(){
        return (
            <div className="test">
                <div style={{color:'red'}}>{this.props.text}</div>
                <p>{this.props.data || '显示输入内容'}</p>
                <input type="text" value={this.state.value} onChange={this.change}/>
                <input type="button" onClick={this.click} value="button"/>
            </div>
        )
    }
}

function mapStateToProps(state, ownprops) {
    return {
       text: state.testStroe.test,
       data: state.testStroe.data,
    }
}
function mapDispatchToProps(dispatch, ownprops) {//使用此函数会拦截 dispatch
    return {

    }
}
export default connect(mapStateToProps)(Test);
