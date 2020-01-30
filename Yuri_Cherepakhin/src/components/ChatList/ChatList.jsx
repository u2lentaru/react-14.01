import React from 'react';
import './Chatlist.css';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';

export default class ChatList extends React.Component {
    
    render() {
        return <div className='chatList'>
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
        </div>
    }

}
