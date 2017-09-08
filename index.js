import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import App from './src/app';
import store from './src/store';

const render = () => {
    ReactDOM.render(
        <AppContainer >
            <Provider store={store}>
                <App />
            </Provider>
        </AppContainer>,
        // document.querySelector('#container'),
        document.getElementById('root'),
    )
}

render()

/*ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider> ,
        document.getElementById('root')
    );*/
if (module.hot) {
    console.log(module.hot)
    // module.hot.accept('components/App', () => {
    module.hot.accept((err) => {
        if (err) {
            console.error('Cannot apply hot update', err)
        }
        render()
    })
}