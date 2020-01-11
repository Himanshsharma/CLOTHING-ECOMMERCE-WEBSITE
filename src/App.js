import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
const Hatspage=()=>{
  return(<h1>hats</h1>)
}

function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path='/' component={Homepage} />
    <Route exact path='/shop/hats' component={Hatspage} />
    </Switch>
    
    </div>
  );
}

export default App;
