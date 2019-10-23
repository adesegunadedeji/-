import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './actions'


function App() {
  const counter = useSelector(state => state.counter);
  const authentication = useSelector(state => state.authentication);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={()=> 
        dispatch(increment(5))}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      {authentication ?  <h1>Authentication | I should not see it </h1>: ''}
     
    </div>
  );
}

export default App;
