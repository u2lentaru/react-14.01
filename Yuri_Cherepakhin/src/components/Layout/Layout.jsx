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

    state = {
        chats: {
            1: {title: '1st chat', messageList: [1]},
            2: {title: '2nd chat', messageList: [2,3]},
            3: {title: '3rd chat', messageList: []},
        },
        messages: {
            1: {name:"Ivan", content:"Hello!"},
            2: {name:"Alex", content:"Hi!"},
            3: {name:"Ivan", content:"Ok."}
        },
        //input: '',
    };

    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;       
        if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
            Object.values(messages)[Object.values(messages).length-1].name !== "Robot") {
                setTimeout(() => this.sendMessage('DnD!','Robot'),1000);
        }
    }

    sendMessage = (message,sender) => {
        //const { messages, chats, input } = this.state;
        const { messages, chats } = this.state;
        const { chatId } = this.props;

        //if (input.length>0 || sender === 'Robot') {
            const messageId = Object.keys(messages).length+1;
            this.setState({
                messages: {...messages,
                    [messageId]: {name: sender, content: message}},
                chats: {...chats,
                    [chatId]: { ...chats[chatId],
                        messageList: [...chats[chatId]['messageList'], messageId]
                    }
                },
            })
        //}
        //if (sender === 'me') {
        //    this.setState({ input: '' })
        //}

    };


    addChat = (title) => {
        const { chats } = this.state;
        const chatId = Object.keys(chats).length + 1;
        this.setState ({
            chats: {...chats,
                [chatId]: { title: title, messageList: []}},
        })
    };


    render() {
        return <>
        <Header chatId={ this.props.chatId } />
        <div className='wrapper'>
            <MuiThemeProvider>
                <ChatList 
                    chats={ this.state.chats } 
                    addChat={ this.addChat } />
            </MuiThemeProvider>
            <MuiThemeProvider>
                <MessageField 
                    chatId={ this.props.chatId }
                    chats={ this.state.chats }
                    messages={ this.state.messages }
                    sendMessage={ this.sendMessage } />
            </MuiThemeProvider>
        </div>
        </>
    }
}
