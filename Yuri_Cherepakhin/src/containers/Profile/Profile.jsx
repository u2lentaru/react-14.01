import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { loadProfile } from '../../store/profileActions';
import CircularProgress from 'material-ui/CircularProgress';


class Profile extends React.Component {

    static propTypes = {
        profile: PropTypes.object.isRequired,
        loadProfile: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
        profileId: PropTypes.number.isRequired,
    };

    static defaultProps = {
        profileId: 1,
    };

    componentDidMount() {
        this.props.loadProfile();
    }

    render() {
        if (this.props.isLoading) {
            return <CircularProgress />
        }
        return (
            <div className='Profile'>
            <h1>Profile: { this.props.profile.name }, email: { this.props.profile.email } </h1>
            <Link to='/'>Home</Link>
            </div>
        )
    }

}


const mapStateToProps = ({profileReducer}) => ({
    //profile: profileReducer
    profile: profileReducer.profile,
    isLoading: profileReducer.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadProfile }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);