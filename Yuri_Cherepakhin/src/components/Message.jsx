import React from 'react';

export default class Message extends React.Component {
    render() {
        const {name,content} = this.props;
        return <div><strong>{name}: </strong>{content}</div>;
    }
}