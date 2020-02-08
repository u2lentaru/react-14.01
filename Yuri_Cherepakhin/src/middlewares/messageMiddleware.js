import { SEND_MESSAGE, sendMessage } from '../store/messageActions';

let timerId = null;

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.sender === 'me') {
                clearTimeout(timerId);
                timerId = setTimeout(() => store.dispatch(sendMessage(Object.keys(store.getState().messageReducer.
                messages).length + 1, 'DnD!', 'Robot', action.chatId)), 1000) 
            }
    }
    return next(action)
}