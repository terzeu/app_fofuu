import {
    LOGGED_IN,
} from './types';

export function login() {
    let dateOfLastLogin = null;
    let isLoggedIn = 'false';
    AsyncStorage.multiGet(['auth_key', 'dateOfLastLogin'])
    .then((res) => {
        isLoggedIn = res[0][1];
        dateOfLastLogin = parseInt(res[1][1]);
    }); //note this works asynchronously so, this may not be a good approach
    return {
        type: LOGGED_IN,
        isLoggedIn, 
        dateOfLastLogin
    };
}
