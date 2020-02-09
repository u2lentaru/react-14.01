export const ADD_CHAT = '@@chat/ADD_CHAT';
export const FIRE = '@@chat/FIRE';
export const UNFIRE = '@@chat/UNFIRE';


export const addChat = (title) => ({
    type: ADD_CHAT,
    title,
});

export const fire = (chatId) => ({
    type: FIRE,
    chatId,
});

export const unfire = (chatId) => ({
    type: UNFIRE,
    chatId,
});