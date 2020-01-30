import React from 'react';
import './Layout.css';
import Header from '../Header/Header';
import ChatList from '../ChatList/ChatList';
import MessageField from '../MessageField/MessageField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';

export default class Layout extends React.Component {

    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
    };

    render() {
        return <>
        <Header chatId={ this.props.chatId } />
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
