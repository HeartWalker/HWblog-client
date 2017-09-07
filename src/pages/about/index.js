import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

let about = '## about'
export default class About extends Component{

    render(){
        return(
            <ReactMarkdown source={about}/>
        )
    }
}