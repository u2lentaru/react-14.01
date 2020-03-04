import React from 'react';
import './Chatlist.css';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';
import ContentSend from 'material-ui/svg-icons/content/send';
import AddIcon from 'material-ui/svg-icons/content/add';
import PropTypes from 'prop-types';
import { TextField } from 'material-ui';

export default class ChatList extends React.Component {
    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired,
    };

    state = {
        input: '',
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
        this.handleAddChat()
        }
    };

    handleAddChat = () => {
        if (this.state.input.length > 0) {
            this.props.addChat(this.state.input);
            this.setState({ input: '' });
        }
    };

    render() {
        const { chats } = this.props;
        const chatElements = Object.keys(chats).map(chatId => (
            <Link key={ chatId } to={ `/chat/${chatId}` }>
                <ListItem 
                    primaryText={ chats[chatId].title }
                    leftIcon={ <ContentSend /> } />
            </Link>
        ));


        return (
            <List>
                { chatElements }
                <ListItem
                    key='Add new chat'
                    leftIcon={ <AddIcon /> }
                    onClick={ this.handleAddChat }
                    children= {<TextField 
                        key='textField'
                        fullWidth
                        name='input'
                        hintText='Add new chat'
                        onChange={ this.handleChange }
                        value={ this.state.input }
                        onKeyUp={ this.handleKeyUp }
                         />}
                />
            </List>
        )
        
        /*return <div className='chatList'>
            <List>
                <Link to="/chat/1/">
                    <ListItem primaryText="1st chat"/>
                </Link>
                <Divider />
                <Link to="/chat/2/">
                    <ListItem primaryText="2nd chat"/>
                </Link>
                <Divider />
                <Link to="/chat/3/">
                    <ListItem primaryText="3rd chat"/>
                </Link>
                <Divider />
            </List>
        </div>*/
    }

}
