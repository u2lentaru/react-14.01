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
        this.setState(({messages}) => ({messages: [...messages, {name: 'Autor', content: 'Good!'}] }));
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

    return <>
        {MessageElements} 
        <button onClick={this.handleClick}>Send Message</button>
    </>
    }
}
