import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import mapDispatchToProps from 'react-redux/es/connect/mapDispatchToProps';

class Header extends React.Component {

    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
    };

    render() {
        return <div className='Header'>Chat { this.props.chatId } 
        <Link to='/profile/'>
                <span>Profile: { this.props.profile.name } </span>
        </Link>
        </div>
    }

}

const mapStateToProps = ({profileReducer}) => ({
    profile: profileReducer
});

const mapDispathToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);