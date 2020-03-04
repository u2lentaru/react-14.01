import React from 'react';
import Message from '../Message/Message';
import './MessageField.css';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import PropTypes from 'prop-types';
import send from 'material-ui/svg-icons/content/send';

export default class MessageField extends React.Component {
    constructor(props) {
        super(props);
        this.textinput = React.createRef();
    }

    static propTypes = {
        chatId: PropTypes.number.isRequired,
        messages: PropTypes.object.isRequired,
        chats: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
    }

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
        input: '',
    };

    componentDidMount() {
        this.textinput.current.focus();
    }

    handleSendMessage = (message, sender) => {
        if (this.state.input.length > 0 || sender === 'Robot' ) {
            this.props.sendMessage(message, sender);
        }
        if (sender === 'me') {
            this.setState({ input: '' });
        }
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

//    handleKeyUp = (event, message) => {
    handleKeyUp = (event) => {
            if (event.keyCode === 13) {
            this.handleSendMessage(this.state.input, 'me')
        }
    };

    /*sendMessage = (message,sender) => {
        const { messages, chats, input } = this.state;
        const { chatId } = this.props;

        if (input.length>0 || sender === 'Robot') {
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
        }
        if (sender === 'me') {
            this.setState({ input: '' })
        }

    };*/

    /*componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;       
        if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
            Object.values(messages)[Object.values(messages).length-1].name !== "Robot") {
                setTimeout(() => this.sendMessage('DnD!','Robot'),1000);
        }
    }*/

render() {
    //const { messages, chats } = this.state;
    const { chatId, messages, chats } = this.props;

    //const MessageElements = this.state.messages.map((text,index) => 
    //(<Message key={index} text {...text}/>));
    
    //const MessageElements = chats[chatId].messageList.map((messageId, index) => (
    const MessageElements = chats[chatId].messageList.map(messageId => (
            <Message
            //key={ index }
            key={ messageId }
            content={ messages[messageId].content }
            name={ messages[messageId].name }
        />));

    return <div id='main' className='message-field'>
        {MessageElements} 
        <TextField
        ref = { this.textinput }
        name = 'input'
        value={ this.state.input } 
        onChange = {this.handleChange} 
        //onKeyUp = { (event) => this.handleKeyUp(event, this.state.input) } 
        onKeyUp={ this.handleKeyUp }
        />
        <FloatingActionButton 
        //onClick={ () => this.handleClick(this.state.input)}>
            //onClick={ () => this.sendMessage(this.state.input, 'me')}>
            onClick={ () => this.handleSendMessage(this.state.input, 'me')}>
            <SendIcon/>
        </FloatingActionButton>
    </div>
    }
}