//console.warn("Привет! сейчас ",(new Date).valueOf());
import React from "react";
import ReactDom from "react-dom";

const messages = [
    {name: "Ivan", content: "Hello"},
    {name: "Ivan2", content: "Hello2"},
    {name: "Ivan3", content: "Hello3"}
]

const Message = ({name, content}) => <div><strong>{name}:</strong> {content}</div>;


function MessageList({messages}) {
    return messages.map((message, index) => <Message {...message} key={index}/>)
}

const ButtonSend = () => (<button onClick={messages.push("Новое сообщение")} >Отправить сообщение</button>);

//const MessageList = ({messages}) => {
//    return messages.map((message) => <Message name={message.name} content={message.content}/>)
//}

ReactDom.render(<ButtonSend/>, document.getElementById("broot"));
ReactDom.render(<MessageList messages={messages}/>, document.getElementById("root"));


//const Link = (title, link) => <a href={"https://" + link}>{title}</a>
    //return React.createElement("a", {"href": "https://"+props.href}, props.title);

//ReactDom.render(<Link title="Это ссылка" link="google.ru"/>,document.getElementById("root"));
//ReactDom.render(React.createElement(Link, {title: "Это ссылка", link: "google.ru"}),document.getElementById("root"));