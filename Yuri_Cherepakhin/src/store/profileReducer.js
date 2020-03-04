import update from 'react-addons-update';

const initialStore = {
    name: 'user',
    email: 'user@server.com'
};

export default function profileReducer(store = initialStore) {
    return store;
}