//console.warn("Привет! сейчас ",(new Date).valueOf());
import React from "react";
import ReactDOM from "react-dom";
import Router from "./components/Router/Router";
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import initStore, { history } from './store/store';
import InstallPopup from "./components/InstallPopup";


//const { store, persistor } = initStore();

ReactDOM.render(
    <Provider store={ initStore() }>
            <ConnectedRouter history={history}>
                <MuiThemeProvider>
                    <div>
                    <Router/>
                    <InstallPopup/>
                    </div>
                </MuiThemeProvider>
            </ConnectedRouter>
    </Provider>,
 document.getElementById('root'));

 /*
 ReactDOM.render(
    <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor } >
            <ConnectedRouter history={history}>
                <MuiThemeProvider>
                    <Router/>
                </MuiThemeProvider>
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
 document.getElementById('root'));
 */