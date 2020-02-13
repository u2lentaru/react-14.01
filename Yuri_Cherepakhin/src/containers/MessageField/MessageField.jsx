import React from 'react';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import Message from '../../components/Message/Message';
import './MessageField.css';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import { sendMessage, loadMessages } from '../../store/messageActions';


class MessageField extends React.Component {
    //constructor(props) {
        //super(props);
        //this.textinput = React.createRef();
    //}

    static propTypes = {
        chatId: PropTypes.number.isRequired,
        messages: PropTypes.object.isRequired,
        chats: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
    }

    state = {
        input: '',
    };

    componentDidMount() {
        this.props.loadMessages();
        /*//this.textinput.current.focus();
        fetch('/api/messages.json'
        ).then(body => body.json()).
        //then(json => console.log(json))
        then(json => {
            json.forEach(msg =>{
                this.props.sendMessage(msg.id, msg.content, msg.name, msg.chatId);
            })
        })*/
    }

    handleSendMessage = (message, sender) => {
        if (this.state.input.length > 0 || sender === 'Robot' ) {
            //this.props.sendMessage(message, sender);
            this.sendMessage(message, sender);
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

    sendMessage = (message, sender) => {
        const { chatId, messages } = this.props;
        const messageId = Object.keys(messages).length + 1;
        this.props.sendMessage(messageId, message, sender, chatId);
    };

    /*componentDidUpdate(prevProps, prevState) {
        if (Object.keys(prevProps.messages).length < Object.keys(this.props.messages).length &&
            this.props.messages[Object.keys(this.props.messages).length].name === "me") {
                setTimeout(() => this.sendMessage(`DnD! Chat # ${this.props.chatId}`,'Robot'),1000);
        }
    }*/

render() {
    if (this.props.isLoading) {
        return <CircularProgress />
    }


    const { chatId, messages, chats } = this.props;

    const MessageElements = chats[chatId].messageList.map(messageId => (
            <Message
            key={ messageId }
            content={ messages[messageId].content }
            name={ messages[messageId].name }
        />));

    return <div id='main' className='message-field'>
        {MessageElements} 
        <TextField
        //ref = { this.textinput }
        name = 'input'
        value={ this.state.input } 
        onChange = {this.handleChange} 
        onKeyUp={ this.handleKeyUp }
        />
        <FloatingActionButton 
            onClick={ () => this.handleSendMessage(this.state.input, 'me')}>
            <SendIcon/>
        </FloatingActionButton>
    </div>
    }
}

const mapStateToProps = ({ chatReducer, messageReducer }) => ({
    chats: chatReducer.chats,
    messages: messageReducer.messages,
    isLoading: messageReducer.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, loadMessages }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (MessageField);