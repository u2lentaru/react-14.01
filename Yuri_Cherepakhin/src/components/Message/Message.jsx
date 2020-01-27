import React from 'react';
import './Message.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Message extends React.Component {
    static propTypes = {
        content: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    };

    render() {
        const {name,content} = this.props;
        const classNames = classnames('Message', { 'Message--robot': name === 'Robot' });
        return <div className={classNames}><strong>{name}: </strong>{content}</div>;
    }
}