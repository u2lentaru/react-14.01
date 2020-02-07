import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import initReducers from './';
import middlewares from '../middlewares';

export const history = createBrowserHistory()

function initStore() {
    const initialStore = {};

    return createStore(
        initReducers(history),
        initialStore,
        compose(
            applyMiddleware(routerMiddleware(history), ...middlewares),
        //window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
        //only for Chrome, not for Opera!
        ),
    );
}

export default initStore;