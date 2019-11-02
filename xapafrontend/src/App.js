import React from 'react';
import './App.css';
import BoxCon from './container/box-container'
import Counter  from './components/Counter'
import NewBusiness from './components/Directory/NewBusiness'
// import createBusiness from './container/createBusiness'
import BusinessPage from './components/Directory/BusinessPage' 
import Directory from './components/Directory/BusinessList';
// import SimpleMap from './components/SimpleMap';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Example from './components/Navbar2/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'


function App() {

  return (
    <div className="App">
      <Example/>
      <BrowserRouter>
    <Switch>
      <Route exact path={"/"} component ={Home} />
      <Route exact path={"/counter"} component ={Counter}/>
      <Route exact path={"/directory"} component ={Directory}/>
      <Route exact path={"/BoxCon"} component ={BoxCon}/>
      <Route path="/directory/new" component={NewBusiness}/>
      <Route path="/directory/:id" component={BusinessPage} />
      {/* <Route exact path={"/Maps"} component ={SimpleMap}/> */}
      </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}


export default App;
