
import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom'
import './header.scss';
export default class Header extends Component {

    render(){
        return (
            <header>
                <div className="container clearfix">
                    <div className="imglogo fl">
                        <img src={require('./logo.png')} alt=""/>
                    </div>
                    <h1 className="textlogo">hw</h1>
                    <ul className="nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/archive">Archive</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                    </ul>
                </div>
            </header>
        )
    }
}


