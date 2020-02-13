import update from 'react-addons-update';
import { 
    LOAD_PROFILE,
    START_PROFILE_LOADING,
    SUCCESS_PROFILE_LOADING,
    ERROR_PROFILE_LOADING,
 } from './profileActions';

const initialStore = {
    //name: 'user',
    //email: 'user@server.com',
    profile: {},
    isLoading: false,
};

export default function profileReducer(store = initialStore, action) {
    switch (action.type) {
        case START_PROFILE_LOADING: {
            return update(store, {
                isLoading: { $set: true },
            });
        }
        case SUCCESS_PROFILE_LOADING: {
            const profile = {};
            action.payload.forEach(msg => {
                const { name, email } = msg;
                //console.log('name,email ',name,email);
                //console.log('msg ',msg);
                profile[msg.id] = { name, email };
                //console.log('profile[msg.id] ', profile[msg.id]);
            });
            return update(store, {
                profile: { $set: profile[1] },
                //profile: { $merge: profile },
                isLoading: { $set: false },
            });
        }
        case ERROR_PROFILE_LOADING: {
            return update(store, {
                isLoading: { $set: false },
            });
        }
        default:
            return store;
    }

}