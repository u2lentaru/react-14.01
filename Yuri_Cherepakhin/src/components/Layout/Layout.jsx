import React from 'react';
import './Layout.css';
import Header from '../Header/Header';
import ChatList from '../ChatList/ChatList';
import MessageField from '../MessageField/MessageField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Layout extends React.Component {
    render() {
        return <>
        <Header/>
        <div className='wrapper'>
            <MuiThemeProvider>
                <ChatList/>
            </MuiThemeProvider>
            <MuiThemeProvider>
                <MessageField/>
            </MuiThemeProvider>
        </div>
        </>
    }
}
