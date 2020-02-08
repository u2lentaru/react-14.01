import { SEND_MESSAGE, sendMessage } from '../store/messageActions';

let timersId = {};

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.sender === 'me') {
                clearTimeout(timersId[action.chatId]);
                timersId[action.chatId] = setTimeout(() => store.dispatch(sendMessage(Object.keys(store.getState().messageReducer.
                messages).length + 1, 'DnD!', 'Robot', action.chatId)), 3000) 
            }
    }
    return next(action)
}