
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {test} from './action';
import './test.scss';
class Test extends Component{
    constructor(props){
        super(props);
        this.click = this.click.bind(this);
    }

    click(){
        console.log('1');
        console.log(this.props.data);
        this.props.dispatch(test());
    }
    render(){
        return (
            <div className="test">
                <p>{this.props.text}</p>
                <p>{this.props.data}</p>
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
function mapDispatchToProps(dispatch, ownprops) {
    return {

    }
}
export default connect(mapStateToProps)(Test)
