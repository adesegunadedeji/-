import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import rootReducer from './reducers/index';
import {Provider} from 'react-redux'

const store = createStore(rootReducer,/* preloadedState, */
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


// //Store  =>> Globalized State

// //Action =>> Describes what you want to do: Give it what whatver you  want to do eg: increment

// //function that returns an object = > Action
// const increment =() => {
//     return {
//         type: "INCREMENT"
//     }
// }
// const decrement =() => {
//     return {
//         type: "DECREMENT"
//     }
// }

// //Reducer Checks what action you did and based on action; it modifies th store


// //Aunthentication Reducer
// //BusinessList Reducer



// let store = createStore(counter);

// //Display it in the console.
// store.subscribe(()=>console.log(store.getState()));
// //Dispatch
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

ReactDOM.render(
<Provider store ={store}>
    <App/>
</Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
