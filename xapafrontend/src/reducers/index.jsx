import counterReducer from './counter';
import authenticationReducer from './authentication';
import colorReducer from './color'
import {combineReducers} from 'redux';

//All Reducers
const rootReducer = combineReducers({
    colorReducer: colorReducer,
    counter: counterReducer,
    authentication: authenticationReducer,

});

export default rootReducer