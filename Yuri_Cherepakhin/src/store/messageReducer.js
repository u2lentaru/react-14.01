import update from 'react-addons-update';
import { SEND_MESSAGE } from './messageActions';

const initialStore = {
    messages: {
        1: {name:"Ivan", content:"Hello!"},
        2: {name:"Alex", content:"Hi!"},
        3: {name:"Ivan", content:"Ok."}
    },
};

export default function messageReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {messages: { $merge:  
                { [action.messageId]: {content: action.text, name: action.sender} } }, });
        }
        default:
            return store;
    }
}