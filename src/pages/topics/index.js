import React, {Component} from 'react';
import {
    Route,
    Link
} from 'react-router-dom'

/*
export default class Topics extends Component {
    constructor(props){
        super(props);
    }
    Topic = ({ match }) => (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
    )
    render(){
        console.log(this.props)
        return(
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/rendering`}>
                            Rendering with React
                        </Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/components`}>
                            Components
                        </Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/props-v-state`}>
                            Props v. State
                        </Link>
                    </li>
                </ul>

                <Route path={`${this.props.match.url}/:topicId`} component={this.Topic}/>
                <Route exact path={this.props.match.url} render={() => (
                    <h3>Please select a topic.</h3>
                )}/>
            </div>
        )
    }
}
*/

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

export default Topics
