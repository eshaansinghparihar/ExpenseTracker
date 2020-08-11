import React, { useState, useEffect } from 'react';
import firebaseConfig from '../config';
import Navigation from './Navigation';
import PieCredit from './PieCredit';
import PieDebit from './PieDebit';
import * as firebase from 'firebase';
import { makeStyles } from '@material-ui/core/styles';
import { Paper ,Container, Grid , CssBaseline, TextField ,Card,CardContent ,Avatar, Button, Typography , InputLabel, Select , MenuItem, FormControl} from '@material-ui/core';
import Loading from './Loading';
function Dashboard() {

  // const classes = useStyles();
    let date = new Date();
    let startOfToday = new Date(); 
    startOfToday.setHours(0,0,0,0);
    let endOfToday = new Date();
    endOfToday.setHours(23,59,59,999);
    const [transaction, setTransaction]=useState([]);
    const [error, setError]=useState('');
     useEffect(()=>{
      const uid=(firebase.auth().currentUser||{}).uid
      if(uid){
         firebase
        .firestore()
        .collection("users")
        .doc(uid)
        .get()
        .then(function(doc) {
          if(doc.exists){
            setTransaction(doc.data().transaction)
          }
          })
        .catch(error=>{
          setError(error.message)
        })
      }
    })
    const dailyData=transaction.filter((item)=>(item.createdAt>=startOfToday && item.createdAt<=endOfToday));
    let travel=0;
    let food=0;
    let bev=0;
    let gro=0;
    let sho=0;
    let inv=0;
    let bill=0;
    let beauty=0;
    let hh=0;
    let sc=0;
    let bk=0;
    let clo=0;
    let eg=0;
    let oth=0;
    let inc=0;
    let sal=0;
    let pro=0;
    dailyData.map(item=>{
        if(item.type===-1)
        {
            if(item.category=='Travel'){
              travel=travel+(item.amount*1)
            }
            if(item.category=='Food'){
              food=food+(item.amount*1)
            }
            if(item.category=='Grocery'){
              gro=gro+(item.amount*1)
            }
            if(item.category=='Beverage'){
              bev=bev+(item.amount*1)
            }
            if(item.category=='Shopping'){
              sho=sho+(item.amount*1)
            }
            if(item.category=='Investment'){
              inv=inv+(item.amount*1)
            }
            if(item.category=='Bill Payment'){
              bill=bill+(item.amount*1)
            }
            if(item.category=='Beauty'){
              beauty=beauty+(item.amount*1)
            }
            if(item.category=='Household'){
              hh=hh+(item.amount*1)
            }
            if(item.category=='Self Care'){
              sc=sc+(item.amount*1)
            }
            if(item.category=='Book'){
              bk=bk+(item.amount*1)
            }
            if(item.category=='Clothing'){
              clo=clo+(item.amount*1)
            }
            if(item.category=='Electronics & Gadgets'){
              eg=eg+(item.amount*1)
            }
            if(item.category=='Others'){
              oth=oth+(item.amount*1)
            }
        }
        if(item.type===1){
          if(item.category=='Income'){
            inc=inc+(item.amount*1)
          }
          if(item.category=='Salary'){
            sal=sal+(item.amount*1)
          }
          if(item.category=='Profit'){
            pro=pro+(item.amount*1)
          }
        }
    })
    const dailyDebit =[travel, food, bev, gro, sho, inv , bill, beauty, hh, sc, bk, clo, eg , oth];
    const dailyCredit=[inc,sal,pro];

    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0); 
    firstDay.setHours(0,0,0,0);
    lastDay.setHours(23,59,59,999);
    const monthlyData=transaction.filter((item)=>(item.createdAt>=firstDay && item.createdAt<=lastDay));
     travel=0;
     food=0;
     bev=0;
     gro=0;
     sho=0;
     inv=0;
     bill=0;
     beauty=0;
     hh=0;
     sc=0;
     bk=0;
     clo=0;
     eg=0;
     oth=0;
     inc=0;
     sal=0;
     pro=0;
    monthlyData.map(item=>{
        if(item.type===-1)
        {
            if(item.category=='Travel'){
              travel=travel+(item.amount*1)
            }
            if(item.category=='Food'){
              food=food+(item.amount*1)
            }
            if(item.category=='Grocery'){
              gro=gro+(item.amount*1)
            }
            if(item.category=='Beverage'){
              bev=bev+(item.amount*1)
            }
            if(item.category=='Shopping'){
              sho=sho+(item.amount*1)
            }
            if(item.category=='Investment'){
              inv=inv+(item.amount*1)
            }
            if(item.category=='Bill Payment'){
              bill=bill+(item.amount*1)
            }
            if(item.category=='Beauty'){
              beauty=beauty+(item.amount*1)
            }
            if(item.category=='Household'){
              hh=hh+(item.amount*1)
            }
            if(item.category=='Self Care'){
              sc=sc+(item.amount*1)
            }
            if(item.category=='Book'){
              bk=bk+(item.amount*1)
            }
            if(item.category=='Clothing'){
              clo=clo+(item.amount*1)
            }
            if(item.category=='Electronics & Gadgets'){
              eg=eg+(item.amount*1)
            }
            if(item.category=='Others'){
              oth=oth+(item.amount*1)
            }
        }
        if(item.type===1){
          if(item.category=='Income'){
            inc=inc+(item.amount*1)
          }
          if(item.category=='Salary'){
            sal=sal+(item.amount*1)
          }
          if(item.category=='Profit'){
            pro=pro+(item.amount*1)
          }
        }
    })
    const monthlyDebit =[travel, food, bev, gro, sho, inv , bill, beauty, hh, sc, bk, clo, eg , oth];
    const monthlyCredit=[inc,sal,pro];
  return (
    <div className="container">
      {/* <Navigation/> */}
      <h2>Daily</h2>
      <PieCredit data={dailyCredit}/>
      <h2>Daily</h2>
      <PieDebit data={dailyDebit}/>
      <h2>Monthly</h2>
      <PieCredit data={monthlyCredit} />
      <h2>Monthly</h2>
      <PieDebit data={monthlyDebit}/>
    </div>
  );
}

export default Dashboard;