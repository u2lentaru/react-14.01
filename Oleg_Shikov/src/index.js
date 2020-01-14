import React from "react";
import ReactDom from "react-dom";

const messages = [
    {name: "Ivan", content: "Hello!"},
    {name: "Oleg", content: "Hi, how are you?"},
    {name: "Ivan", content: "I am well"}
]

const Message = ({name, content}) => <div><strong>{name}:</strong> {content}</div>;
// React.createElement("div", {}, [React.createElement("strong", {}, name), content])

function MessageList({messages}) {
    return messages.map((message, index) => <Message {...message} key={index}/>)
}

    
ReactDom.render(<MessageList messages={messages}/>, document.getElementById("root"));

// <Link title="Это ссылка" link="google.ru" />
// const Link = ({title, link}) => <a href={"https://" + link}>{title}</a>; // JSX
// return React.createElement("a", {"href": "https://" + props.link}, props.title); // No JSX
// React.createElement(Link, { title: "Это ссылка", link: "google.ru" })