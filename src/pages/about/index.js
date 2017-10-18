import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

let about = '## about\n\r路漫漫其修远兮\n\r吾将上下而求索'
export default class About extends Component{

    render(){
        return(
            <ReactMarkdown source={about}/>
        )
    }
}