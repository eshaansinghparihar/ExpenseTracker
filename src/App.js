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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const AddTransactionPage=()=>{
  return(<AddTransaction/>);
}

const TransactionDetailsPage=()=>{
  return(<TransactionDetails/>);
}

const DashboardPage=()=>{
  return(<Dashboard/>);
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
        <Route exact path="/dashboard" component={DashboardPage}>
          <Dashboard/>
        </Route>
        <Route exact path='/addTransaction' component={AddTransactionPage}>
        <AddTransaction/>
        </Route>
        <Route path='/' component={TransactionDetailsPage}>
        <TransactionDetails/>
        </Route>
        <Redirect to="/" />
     </Switch>
     :
     <div>
       <Navigation/>
       <div>
        <Switch>
        <Route exact path="/signup" >
          <Signup/>
        </Route>        
        <Route path='/'>
          <Signin/>
        </Route>
        <Redirect to="/" />
        </Switch>
        </div>
     </div>
     }
    </div>
    </BrowserRouter>
  );
}

export default App;
