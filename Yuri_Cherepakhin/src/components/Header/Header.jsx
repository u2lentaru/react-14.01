import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
    };

    render() {
        return <div className='Header'>Chat { this.props.chatId } 
        <Link to='/profile/'>
                <span>Profile</span>
        </Link>
        </div>
    }

}