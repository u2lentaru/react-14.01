import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';


class Profile extends React.Component {
    render() {
        return (
            <div className='Profile'>
            <h1>Profile: { this.props.profile.name }, email: { this.props.profile.email } </h1>
            <Link to='/'>Home</Link>
            </div>
        )
    }

}


const mapStateToProps = ({profileReducer}) => ({
    profile: profileReducer
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);