
import React, {Component} from 'react';
import {
    Link,
    NavLink,
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
                        <li><NavLink activeClassName='active' exact to="/">Home</NavLink></li>
                        <li><NavLink activeClassName='active' to="/archive">Archive</NavLink></li>
                        <li><NavLink activeClassName='active' to="/about">About</NavLink></li>
                        <li><NavLink activeClassName='active' to="/topics">Topics</NavLink></li>
                    </ul>
                </div>
            </header>
        )
    }
}


