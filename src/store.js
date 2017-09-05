import {
    combineReducers,
    applyMiddleware,
    createStore,
} from 'redux';
import thunk from 'redux-thunk';

import testReducer from './pages/test/reducers';

const reducer = combineReducers({
    testStroe: testReducer,

});

let middlewares = [
    //other middlewares,
    thunk,
];

let createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);



function configStore() {
    let store = createStoreWithMiddleware(reducer);
    return store;
}

export default configStore();