import React from 'react';
import Message from './Message';
import { render } from 'react-dom';

export default class MessageField extends React.Component {
    state = {
        messages: [
            {name:"Ivan", content:"Hello!"},
            {name:"Alex", content:"Hi!"},
            {name:"Ivan", content:"Ok."}
        ]
    };


    handleClick = () => {
    this.setState({messages: [ ...this.state.messages, 'Good!'] });
};

render() {
    const MessageElemets = this.state.messages.map((text,index) => 
    (<Message key = {index} text = {text} /> ));

    return <div>
        { MessageElemets } 
        <button onClick={this.handleClick}>Send Message</button>
    </div>

    }
}
