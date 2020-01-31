import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';


export default class Profile extends React.Component {
    render() {
        return (
            <>
            <h1>Profile</h1>
            <Link to='/'>Home</Link>
            </>
        )
    }

}