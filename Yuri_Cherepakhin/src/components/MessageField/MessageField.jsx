import React from 'react';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import Message from '../Message/Message';
import './MessageField.css';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import PropTypes from 'prop-types';
import send from 'material-ui/svg-icons/content/send';

class MessageField extends React.Component {
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


render() {


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
        ref = { this.textinput }
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

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (MessageField);