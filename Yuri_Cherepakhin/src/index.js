//console.warn("Привет! сейчас ",(new Date).valueOf());
import React from "react";
import ReactDom from "react-dom";

function Link(props) {
    return React.createElement("a", {"href": "https://"+props.href}, props.title);
}

ReactDom.render(React.createElement(Link, {title: "Это ссылка", href: "google.ru"}),document.getElementById("root"));