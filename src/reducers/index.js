import { combineReducers } from 'redux';

import { loginReducer } from './LoginReducers';

const rootReducer = combineReducers({
    loggedIn: loginReducer
});

export default rootReducer;