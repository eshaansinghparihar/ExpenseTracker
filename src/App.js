import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect ,BrowserRouter} from 'react-router-dom'
import * as firebase from 'firebase';
import firebaseConfig from './config';
import AddTransaction from './components/AddTransaction';
import Dashboard from './components/Dashboard';
import Signin from './components/Signin';
import Signup from './components/Signup';
import TransactionDetails from './components/TransactionDetails';
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
function App() {
  const [user,setUser]=useState({});
  useEffect(()=>{
    firebase.auth().onAuthStateChanged(user=>{
      setUser(user);
  })
  });
  return (
    <BrowserRouter>
    <div className="App">
     {user?
     <Switch>
        <Route exact path="/dashboard">
          <Dashboard/>
        </Route>
        <Route exact path='/transaction'>
          <TransactionDetails/>
        </Route>
        <Route path='/'>
          <AddTransaction/>
        </Route>
        <Redirect to="/" />
     </Switch>
     :
     <Switch>
        <Route exact path="/signup">
          <Signup/>
        </Route>        
        <Route path='/'>
          <Signin/>
        </Route>
        <Redirect to="/" />
     </Switch>
     }
    </div>
    </BrowserRouter>
  );
}

export default App;
