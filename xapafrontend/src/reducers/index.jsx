import counterReducer from './counter';
import authenticationReducer from './authentication';
import {combineReducers} from 'redux';

//All Reducers
const rootReducer = combineReducers({
    counter: counterReducer,
    authentication: authenticationReducer,
});

export default rootReducer