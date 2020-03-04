import update from 'react-addons-update';
import { SEND_MESSAGE, SUCCESS_MESSAGES_LOADING } from './messageActions';
import { ADD_CHAT, FIRE, UNFIRE } from './chatActions';

const initialStore = {
    chats: {
        1: {title: 'Chat 1', unread: true, messageList: [1]},
        2: {title: 'Chat 2', unread: false, messageList: [2,3]},
        3: {title: 'Chat 3', unread: false, messageList: []},
        //1: {title: 'Chat 1', messageList: [1]},
        //2: {title: 'Chat 2', messageList: [2]},
        //3: {title: 'Chat 3', messageList: []},
    },
};


export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                chats: { $merge: { [action.chatId]: {
                    title: store.chats[action.chatId].title,
                    unread: store.chats[action.chatId].unread,
                    messageList: [...store.chats[action.chatId].messageList, action.messageId]
                } } },
            });
        }
        case SUCCESS_MESSAGES_LOADING: {
            const chats = {...store.chats};
            action.payload.forEach(msg => {
                const { id, chatId } = msg;
                chats[chatId].messageList.push(id);
            });
            return update(store, {
                chats: { $set: chats },
                isLoading: { $set: false },
            });
        }
        case ADD_CHAT: {
            const chatId = Object.keys(store.chats).length + 1;
            return update(store, {
                chats: { $merge: {
                    [chatId]: {
                        //title: action.title, messageList: []
                        title: action.title, unread: false, messageList: []
                } } },
            });
        }
        case FIRE: {
            //console.log('fire');
            return update(store, {
                chats: { $merge: { [action.chatId]: {
                    title: store.chats[action.chatId].title,
                    unread: true,
                    messageList: store.chats[action.chatId].messageList
                } } },
            });
        }
        case UNFIRE: {
            //console.log('unfire');
            return update(store, {
                chats: { $merge: { [action.chatId]: {
                    title: store.chats[action.chatId].title,
                    unread: false,
                    messageList: store.chats[action.chatId].messageList
                } } },
            });
        }
        default:
            return store;
    }
}