import React, {Component} from 'react';

import './css/style.scss';

import ReactMarkdown from 'react-markdown';
import Header from './pages/header';
import Footer from './pages/footer';
import Test from './pages/test';

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
                <Test/>
                <ReactMarkdown source={input} />
                <Footer/>
            </div>
        )
    }
}

