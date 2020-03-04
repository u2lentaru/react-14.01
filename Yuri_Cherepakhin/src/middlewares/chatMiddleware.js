import { SEND_MESSAGE, sendMessage } from '../store/messageActions';

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.sender === 'me') {
                setTimeout(() => store.dispatch(sendMessage(Object.keys(store.getState().messageReducer.
                messages).length + 1, 'DnD!', 'Robot', action.chatId)), 1000)
            }
            else {
                const {id, name} = action.payload;
                console.log(store.getState().router.location.pathname)
                //if (store.getState().router.location.pathname === '/chats/' + id) {

                //}
            }
    }
    return next(action)
}