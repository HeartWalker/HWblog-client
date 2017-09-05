
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {test} from './action';
import './test.scss';
class Test extends Component{

    render(){
        return (
            <div className="test">
                <p>{this.props.text}</p>
                <p></p>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return {
       text: store.testStroe.test
    }
}
function mapDispatchToProps() {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Test)
