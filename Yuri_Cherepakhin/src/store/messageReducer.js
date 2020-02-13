import update from 'react-addons-update';
import { 
    SEND_MESSAGE,
    START_MESSAGES_LOADING,
    SUCCESS_MESSAGES_LOADING,
    ERROR_MESSAGES_LOADING,
 } from './messageActions';

const initialStore = {
    messages: {
        1: {name:"Ivan", content:"Hello!"},
        2: {name:"Alex", content:"Hi!"},
        3: {name:"Ivan", content:"Ok."}
    },
    isLoading: false,
};

export default function messageReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {messages: { $merge:  
                { [action.messageId]: {content: action.text, name: action.sender} } }, });
        }
        case START_MESSAGES_LOADING: {
            return update(store, {
                isLoading: { $set: true },
            });
        }
        case SUCCESS_MESSAGES_LOADING: {
            const messages = {};
            action.payload.forEach(msg => {
                const { content, name } = msg;
                //console.log('msg ',msg);
                messages[msg.id] = { content, name };
                //console.log('messages[msg.id] ', messages[msg.id]);
            });
            return update(store, {
                //messages: { $set: messages },
                messages: { $merge: messages },
                isLoading: { $set: false },
            });
        }
        case ERROR_MESSAGES_LOADING: {
            return update(store, {
                isLoading: { $set: false },
            });
        }
        default:
            return store;
    }
}