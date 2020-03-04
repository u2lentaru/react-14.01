import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { loadProfile } from '../../store/profileActions';
import CircularProgress from 'material-ui/CircularProgress';

class Header extends React.Component {

    static propTypes = {
        chatId: PropTypes.number,
        loadProfile: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        chatId: 1,
    };

    componentDidMount() {
        this.props.loadProfile();
    }

    render() {
        return <div className='Header'>Chat { this.props.chatId } 
        <Link to='/profile/'>
                <span>Profile: { this.props.profile.name } </span>
        </Link>
        </div>
    }

}

const mapStateToProps = ({profileReducer}) => ({
    //profile: profileReducer
    profile: profileReducer.profile,
    isLoading: profileReducer.isLoading,
});

//const mapDispathToProps = dispatch => bindActionCreators({}, dispatch);
const mapDispatchToProps = dispatch => bindActionCreators({ loadProfile }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);