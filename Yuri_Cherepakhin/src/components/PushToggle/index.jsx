import React from 'react';
import './styles.css';

export default class PushToggle extends React.Component {
    render() {
        return <div className="push">
            <img className="push__image" src="src/components/PushToggle/push-off.png" alt="Push Notification"/>
        </div>
    }        
}