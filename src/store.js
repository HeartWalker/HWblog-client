import {
    combineReducers,
    applyMiddleware,
    createStore,
} from 'redux';
import thunk from 'redux-thunk';

import testReducer from './pages/test/reducers';
import articleReducer from './pages/article/reducers';
import archivesReducer from './pages/archives/reducers';

const reducer = combineReducers({
    testStroe: testReducer,
    articleStore: articleReducer,
    archivesStore: archivesReducer,

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