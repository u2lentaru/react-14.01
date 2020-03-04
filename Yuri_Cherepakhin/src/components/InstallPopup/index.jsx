import React from 'react';
import Close from 'material-ui/svg-icons/navigation/close';
import './styles.css';

class InstallPopup extends React.Component {
    state = {
        isShown: false,
    };

    componentDidMount() {
        const isIos = () => {
            const userAgent = window.navigator.userAgent.toLowerCase();
            return /iphone/.test(userAgent);
        };
        const isInStandAloneMode = () => ('standalone' in window.navigator) &&
        (window.navigator.standalone);
        if (isIos() && !isInStandAloneMode()) {
            this.handleShow();
        }
    }

    handleShow = () => {
        this.setState({ isShown: true });
    };
    
    handleHide = () => {
        this.setState({ isShown: false });
    };

    render() {
        return (
            <div style = {{ display: this.state.isShown ? 'block' : 'none' }}
            className = "speech-bubble-container">
                <div className = "speech-bubble">
                    <Close className = "close-install-message-icon" onClick = {this.handleHide}/>
                    <div style = {{ paddingRight: '15px' }}>
                        Установи приложение  на свой iPhone: нажми «Поделиться», 
                        а затем на экран «Домой»​
                    </div>
                </div>
            </div>
        );
    }
}

export default InstallPopup;