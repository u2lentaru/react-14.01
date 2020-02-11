/*import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import initReducers from './';
import middlewares from '../middlewares';

const persistConfig = {
    key: 'geekmessenger7',
    storage,
    stateReconciler: autoMergeLevel2,
    whiteList: ['messageReducer', 'chatReducer', 'profileReducer'],
};

export const history = createBrowserHistory()

function initStore() {
    const initialStore = {};

    const store = createStore(
        persistReducer(persistConfig, initReducers(history)),
        initialStore,
        compose(
            applyMiddleware(routerMiddleware(history), ...middlewares),
        //window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
        //only for Chrome, not for Opera!
        ),
    );

    const persistor = persistStore(store);
    
    return { store, persistor };
}

export default initStore;
*/

import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import initReducers from './';
import middlewares from '../middlewares';

export const history = createBrowserHistory()

function initStore() {
    const initialStore = {};

    return createStore(
        //initReducers,
        initReducers(history),
        initialStore,
        compose(
            //applyMiddleware(...middlewares),
            applyMiddleware(routerMiddleware(history), ...middlewares),
        //window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
        //only for Chrome, not for Opera!
        ),
    );
}

export default initStore;
