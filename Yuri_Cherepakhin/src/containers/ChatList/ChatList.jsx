import React from 'react';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import './Chatlist.css';
import {List, ListItem} from 'material-ui/List';
import { push } from 'connected-react-router';
import ContentSend from 'material-ui/svg-icons/content/send';
import AddIcon from 'material-ui/svg-icons/content/add';
import PropTypes from 'prop-types';
import { TextField } from 'material-ui';
import { addChat } from '../../store/chatActions';

class ChatList extends React.Component {
    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired,
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

    handleNavigate = (link) => {
        this.props.push(link);
    };

    render() {
        const { chats } = this.props;
        //console.log(chatId);
        const chatElements = Object.keys(chats).map(chatId => (
            //<Link key={ chatId } to={ `/chat/${chatId}` }>
                <ListItem 
                    key={ chatId }
                    //primaryText={ chats[chatId].title }
                    primaryText={ chats[chatId].title + (chats[chatId].unread && 'Новое сообщение') }
                    leftIcon={ <ContentSend /> }
                    onClick = { () => this.handleNavigate(`/chat/${chatId}`) }
                />
            //</Link>
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
    }

}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (ChatList);