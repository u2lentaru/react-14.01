export const ADD_CHAT = '@@chat/ADD_CHAT';
export const FIRE = '@@chat/FIRE';
export const UNFIRE = '@@chat/UNFIRE';


export const addChat = (title) => ({
    type: ADD_CHAT,
    title,
});

export const fire = (id) => ({
    type: FIRE,
    chatId,
});

export const unfire = (id) => ({
    type: UNFIRE,
    chatId,
});