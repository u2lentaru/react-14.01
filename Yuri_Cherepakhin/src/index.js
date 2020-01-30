//console.warn("Привет! сейчас ",(new Date).valueOf());
import React from "react";
import ReactDOM from "react-dom";
import MessageField from "./components/MessageField/MessageField";
import Layout from "./components/Layout/Layout";
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
    <BrowserRouter>
        <MuiThemeProvider>
            <Layout/>
        </MuiThemeProvider>
    </BrowserRouter>,
 document.getElementById('root'));