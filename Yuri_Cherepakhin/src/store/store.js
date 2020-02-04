import { createStore } from 'redux';
import initReducers from './';


function initStore() {
    const initialStore = {};

    return createStore(
        initReducers,
        initialStore,
        //window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
        //only for Chrome, not for Opera!
    );
}

export default initStore;