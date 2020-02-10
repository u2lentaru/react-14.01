import { SEND_MESSAGE, sendMessage } from '../store/messageActions';
import { FIRE, UNFIRE, fire, unfire } from '../store/chatActions';

let timersId = {};

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            if (action.sender === 'me') {
                clearTimeout(timersId[action.chatId]);
                timersId[action.chatId] = setTimeout(() => store.dispatch(sendMessage(Object.keys(store.getState().messageReducer.
                messages).length + 1, 'DnD!', 'Robot', action.chatId)), 3000);
            }
            else {
                //console.log(action.payload.location.pathname.split('/')[2]);
                console.log(store.getState().router.location.pathname, ' ', action.chatId);
                if (store.getState().router.location.pathname !== '/chat/' + action.chatId) {
                    console.log('call fire!');
                    store.dispatch(fire(action.chatId));
                }
            }
        }
        case '@@router/LOCATION_CHANGE': {
            //console.log(action.payload.location.pathname.split('/')[2])
            console.log(store.getState().router.location.pathname.split('/')[2]);
            const id = store.getState().router.location.pathname.split('/')[2];
            store.dispatch(unfire(id));
        }

    }
    return next(action)
}