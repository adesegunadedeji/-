import React from 'react';
import './App.css';
import BoxCon from './container/box-container'
import Counter  from './components/Counter'



function App() {
  return (
    <div className="App">
      <Counter/>
      <BoxCon/>
    </div>
  );
}

export default App;
