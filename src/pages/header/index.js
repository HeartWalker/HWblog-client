
import React, {Component} from 'react';

import './header.scss';

export default class Header extends Component {

    render(){
        return (
            <header>
                <div className="container clearfix">
                    <div className="imglogo fl">
                        <img src={require('./logo.png')} alt=""/>
                    </div>
                    <h1 className="textlogo fl">hw</h1>
                </div>
            </header>
        )
    }
}


