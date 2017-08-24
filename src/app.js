import React, {Component} from 'react';

import './app.css';
import './main.scss';
const img = require('./imgs/logo.png');
//import img from './imgs/logo.png';

export default class App extends Component {
    render(){
        return (
            <div className="app">
                hellow
                <img src="./imgs/logo.png" alt=""/>
            </div>
        )
    }
}

