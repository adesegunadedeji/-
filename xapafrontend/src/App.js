import React from 'react';
import './App.css';
import BoxCon from './container/box-container'
import Counter  from './components/Counter'
import Directory from './components/Directory/BusinessList';
// import SimpleMap from './components/SimpleMap';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
    <Switch>
      <Route exact path={"/"} />
      <Route exact path={"/counter"} component ={Counter}/>
      <Route exact path={"/directory"} component ={Directory}/>
      <Route exact path={"/BoxCon"} component ={BoxCon}/>
      {/* <SimpleMap/> */}
      </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
