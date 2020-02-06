import { createStore, applyMiddleware, compose } from 'redux';
import initReducers from './';
import middlewares from '../middlewares';


function initStore() {
    const initialStore = {};

    return createStore(
        initReducers,
        initialStore,
        compose(
            applyMiddleware(...middlewares),
        //window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
        //only for Chrome, not for Opera!
        ),
    );
}

export default initStore;