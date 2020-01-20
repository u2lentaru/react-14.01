import React from 'react';
import Message from './Message';

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
    const MessageElements = this.state.messages.map((text,index) => 
    (<Message key = {index} text = {text} /> ));

    return <div>
        { MessageElements } 
        <button onClick={this.handleClick}>Send Message</button>
    </div>

    }
}
