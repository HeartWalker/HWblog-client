import React, {Component} from 'react';
import {
    HashRouter as Router,
    //BrowserRouter as Router,
    Route,
    Switch
    //Link
} from 'react-router-dom'

import './css/style.scss';
import Header from './pages/header';
import Footer from './pages/footer';
import Test from './pages/test';
import About from './pages/about';
import Home from './pages/home';
import Article from './pages/article';
import Topics from './pages/topics';
import Archives from './pages/archives';

/*
import createHistory from 'history/createBrowserHistory';
const history = createHistory();
*/
//todo 参数匹配不到404页面跳转问题

export default class App extends Component {

    render(){
        return(
            <Router>
                <div>
                    <Header/>
                    <Test/>
                    <div className='container contain'>
                        <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/page/:num" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/topics" component={Topics}/>
                        <Route exact path="/archive" component={Archives}/>
                        <Route path={`/archive/:time`} component={Article}/>
                        <Route component={NoMatch}/>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </Router>
        )
    }
}
const NoMatch = ({ location }) => (
    <div>
        <h2>404404</h2>
        <h3>No match for <code>{location.pathname}</code></h3>
    </div>
);

