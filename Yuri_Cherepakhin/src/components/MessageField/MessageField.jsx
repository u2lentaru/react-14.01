import React from 'react';
import Message from '../Message/Message';
import './MessageField.css';

export default class MessageField extends React.Component {
    state = {
        messages: [
            {name:"Ivan", content:"Hello!"},
            {name:"Alex", content:"Hi!"},
            {name:"Ivan", content:"Ok."}
        ],
        input: '',
    };


    //handleClick = () => {
    //    this.setState(({messages}) => ({messages: [...messages, {name: 'Autor', content: 'Good!'}] }));
    //};

    handleClick = (message) => {
        this.sendMessage(message)
    };

    handleChange = (event) => {
        this.setState({ input: event.target.value });
    };

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) {
            this.sendMessage(message)
        }
    };

    sendMessage = (message) => {
        this.setState({ 
            messages: [ ...this.state.messages, {name: 'me', content: message}],
            input: '',
        });
    };

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length-1].name !== "Robot") {
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
        <input onChange = {this.handleChange} value={ this.state.input } 
        onKeyUp = { (event) => handleKeyUp(event, this.state.input) } />
        <button onClick={this.handleClick}>Send Message</button>
    </div>
    }
}
