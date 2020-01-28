import React from 'react';
import './Chatlist.css';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

export default class ChatList extends React.Component {
    
    render() {
        return <div className='chatList'>
            <List>
                <ListItem
                    primaryText="1st chat"/>
                <Divider />
                <ListItem
                    primaryText="2nd chat"/>
                <Divider />
                <ListItem
                    primaryText="3rd chat"/>
                <Divider />
            </List>
        </div>
    }

}
