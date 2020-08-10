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
import Navigation from './components/Navigation'
import DailyTransaction from './components/DailyTransactions';
import MonthlyTransaction from './components/MonthlyTransaction';

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
      <div>
      <Navigation/>
       <div>
     <Switch>
        <Route exact path="/dashboard" >
          <Dashboard/>
        </Route>
        <Route exact path='/addTransaction' >
        <AddTransaction/>
        </Route>
        <Route exact path='/dailyTransaction' >
        <DailyTransaction/>
        </Route>
        <Route exact path='/monthlyTransaction' >
        <MonthlyTransaction/>
        </Route>
        <Route path='/' >
        <TransactionDetails/>
        </Route>
        <Redirect to="/" />
     </Switch>
     </div>
     </div>
     :
    
        <Switch>
        <Route exact path="/signup" >
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
