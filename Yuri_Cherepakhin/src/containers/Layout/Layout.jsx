import React from 'react';
//import { bindActionCreators } from 'redux';
//import connect from 'react-redux/es/connect/connect';
import './Layout.css';
import Header from '../Header/Header';
import ChatList from '../ChatList/ChatList';
import MessageField from '../MessageField/MessageField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
//import { sendMessage } from '../../store/messageActions';

export default class Layout extends React.Component {

    static propTypes = {
        chatId: PropTypes.number,
        //sendMessage: PropTypes.func.isRequired,
    };

    static defaultProps = {
        chatId: 1,
    };

    state = {
        /*chats: {
            1: {title: '1st chat', messageList: [1]},
            2: {title: '2nd chat', messageList: [2,3]},
            3: {title: '3rd chat', messageList: []},
        },
        messages: {
            1: {name:"Ivan", content:"Hello!"},
            2: {name:"Alex", content:"Hi!"},
            3: {name:"Ivan", content:"Ok."}
        },*/
        //input: '',
    };

    /*componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;       
        if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
            Object.values(messages)[Object.values(messages).length-1].name !== "Robot") {
                setTimeout(() => this.sendMessage('DnD!','Robot'),1000);
        }
    }*/

    /*sendMessage = (message,sender) => {
        //const { messages, chats } = this.state;
        const { messages } = this.state;
        const { chatId } = this.props;

            const messageId = Object.keys(messages).length+1;
            this.setState({
                messages: {...messages,
                    [messageId]: {name: sender, content: message}},

            });
            this.props.sendMessage(messageId, message, sender, chatId);

    };*/


    /*addChat = (title) => {
        const { chats } = this.state;
        const chatId = Object.keys(chats).length + 1;
        this.setState ({
            chats: {...chats,
                [chatId]: { title: title, messageList: []}},
        })
    };*/


    render() {
        return <>
        <Header chatId={ this.props.chatId } />
        <div className='wrapper'>
            <MuiThemeProvider>
                <ChatList />
            </MuiThemeProvider>
            <MuiThemeProvider>
                <MessageField 
                    chatId={ this.props.chatId }
                    //messages={ this.state.messages }
                    //sendMessage={ this.sendMessage } 
                    />
            </MuiThemeProvider>
        </div>
        </>
    }
}


//const mapStateToProps = ({}) => ({});

//const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

//export default connect(mapStateToProps, mapDispatchToProps) (Layout);