import React, {Component} from 'react';

import './css/style.scss';

//var ReactMarkdown = require('react-markdown');
import ReactMarkdown from 'react-markdown';
import Header from './pages/header';
import Footer from './pages/footer';

const input = '# This is a header\n\nAnd this is a paragraph';


export default class App extends Component {
    /*render(){
        return (
            <div className="app">
                hellow
                <img src={require('./imgs/logo.png')} alt=""/>
            </div>
        )
    }*/
    render(){
        return(
            <div>
                <Header/>
                <ReactMarkdown source={input} />
                <Footer/>
            </div>
        )
    }
}

