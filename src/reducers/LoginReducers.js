import {
    LOGGED_IN,
    DEVICE_ID,
    LOGGIN_DATA,
    LOGGED_OUT,
    TOKEN_IN,
    AVISO_TOAST
} from '../actions/types';


const initialState = {
    userIsLoggedIn: false,
    userDataLoggin: {},
    token: null,
    idDevice: null,
    avisoToast: {}
};

export function loginReducer(state=initialState, action) {
    switch (action.type) {

        case LOGGED_IN:
            let trulyLoggedIn = true;
            return {...state, userIsLoggedIn: trulyLoggedIn };
        case LOGGIN_DATA:
            return {...state, userDataLoggin: action.valor };
        case TOKEN_IN:
            return {...state, token: action.valor };
        case LOGGED_OUT:
            return {...state, userDataLoggin:{}, token:null };
        case DEVICE_ID:
            return {...state, idDevice: action.valor };
        case AVISO_TOAST:
            console.log("mudando o toast")
            return {...state, avisoToast: action.valor };
        default:
            return state;
    }
}