//console.warn("Привет! сейчас ",(new Date).valueOf());
import React from "react";
import ReactDOM from "react-dom";
import Router from "./components/Router/Router";
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import initStore, { history } from './store/store';

ReactDOM.render(
    <Provider store={ initStore() }>
        <ConnectedRouter history={history}>
            <MuiThemeProvider>
                <Router/>
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>,
 document.getElementById('root'));