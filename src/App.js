import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Login from './component/login';
import Signup from './component/signup';
import Home from './component/home';

function App() {
  return (
    <div>
     <BrowserRouter>
      <Switch>
        <Route path="/Login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/home" component={Home}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
