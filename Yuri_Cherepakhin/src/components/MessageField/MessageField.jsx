import React from 'react';
import Message from '../Message/Message';
import './MessageField.css';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

//import PropTypes from 'prop-types';

export default class MessageField extends React.Component {
    constructor(props) {
        super(props);
        this.textinput = React.createRef();
    }
    state = {
        messages: [
            {name:"Ivan", content:"Hello!"},
            {name:"Alex", content:"Hi!"},
            {name:"Ivan", content:"Ok."}
        ],
        input: ''
    };

    componentDidMount() {
        this.textinput.current.focus();
    }

    //handleClick = () => {
    //    this.setState(({messages}) => ({messages: [...messages, {name: 'Autor', content: 'Good!'}] }));
    //};

    handleClick = (message) => {
        this.sendMessage(message);
        //console.log(message);
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) {
            this.sendMessage(message)
        };
    };

    sendMessage = (message) => {
        this.setState({ 
            messages: [ ...this.state.messages, {name: 'me', content: message}], input: ''
        });
    };

    //componentDidUpdate() {
    componentDidUpdate(prevProps, prevState) {        
        if (prevState.messages.length < this.state.messages.length &&
            this.state.messages[this.state.messages.length-1].name !== "Robot") {
            setTimeout(() => {
                this.setState(({messages}) => ({messages: [...messages, {name: 'Robot', content: 'DnD!'}] }))
            },1000);
        }
    }

render() {
    const MessageElements = this.state.messages.map((text,index) => 
    (<Message key={index} text {...text}/>));

    return <div id='main' className='message-field'>
        {MessageElements} 
        <TextField
        ref = { this.textinput }
        name = 'input'
        value={ this.state.input } 
        onChange = {this.handleChange} 
        onKeyUp = { (event) => this.handleKeyUp(event, this.state.input) } 
        />
        <FloatingActionButton 
        onClick={ () => this.handleClick(this.state.input)}>
            <SendIcon/>
        </FloatingActionButton>
    </div>
    }
}