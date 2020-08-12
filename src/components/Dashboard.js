import React, { useState, useEffect } from 'react';
// import firebaseConfig from '../config';
// import { Link  ,Route, Redirect ,BrowserRouter, Switch} from 'react-router-dom';
// import Navigation from './Navigation';
// import SignIn from './Signin';
import PieCredit from './PieCredit';
import PieDebit from './PieDebit';
import PieCreditMode from './PieCreditMode';
import PieDebitMode from './PieDebitMode';
import * as firebase from 'firebase';
import { makeStyles } from '@material-ui/core/styles';
import { Paper ,Container, Grid , CssBaseline, TextField ,Card,CardContent ,Avatar, Button, Typography , InputLabel, Select , MenuItem, FormControl} from '@material-ui/core';
import Loading from './Loading';
import NoData from './NoData';
const useStyles = makeStyles((theme) => ({
  paperBalance:{
    //   borderBottom:'10px solid #FFD700',
      margin:theme.spacing(2),
      // marginTop:theme.spacing(14),
      marginLeft:'auto',
      marginRight:'auto',
      alignItems:'center',
      width:'100%',
      justifyContent:'center',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      // minWidth:'100'
  },
  card:{
    marginTop:theme.spacing(2),
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent:'center',
    alignItems:'center'
  },
  nodata:{
    //   borderBottom:'10px solid #FFD700',
      margin:theme.spacing(2),
      alignItems:'center',
      width:'100%',
      justifyContent:'center',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      // minWidth:'100'
  },
}))

function Dashboard() {

  const classes = useStyles();
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
    if(transaction){
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
      let cre=0;
      let deb=0;
      let upi=0;
      let cash=0;
      let netb=0;
      let crec=0;
      let debc=0;
      let upic=0;
      let cashc=0;
      let netbc=0;
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
              if(item.category==='Travel'){
                travel=travel+(item.amount*1)
              }
              if(item.category==='Food'){
                food=food+(item.amount*1)
              }
              if(item.category==='Grocery'){
                gro=gro+(item.amount*1)
              }
              if(item.category==='Beverage'){
                bev=bev+(item.amount*1)
              }
              if(item.category==='Shopping'){
                sho=sho+(item.amount*1)
              }
              if(item.category==='Investment'){
                inv=inv+(item.amount*1)
              }
              if(item.category==='Bill Payment'){
                bill=bill+(item.amount*1)
              }
              if(item.category==='Beauty'){
                beauty=beauty+(item.amount*1)
              }
              if(item.category==='Household'){
                hh=hh+(item.amount*1)
              }
              if(item.category==='Self Care'){
                sc=sc+(item.amount*1)
              }
              if(item.category==='Book'){
                bk=bk+(item.amount*1)
              }
              if(item.category==='Clothing'){
                clo=clo+(item.amount*1)
              }
              if(item.category==='Electronics & Gadgets'){
                eg=eg+(item.amount*1)
              }
              if(item.category==='Others'){
                oth=oth+(item.amount*1)
              }
              if(item.mode==='Credit Card'){
                cre=cre+(item.amount*1)
              }
              if(item.mode==='Debit Card'){
                deb=deb+(item.amount*1)
              }
              if(item.mode==='UPI'){
                upi=upi+(item.amount*1)
              }
              if(item.mode==='Cash'){
                cash=cash+(item.amount*1)
              }
              if(item.mode==='NetBanking'){
                netb=netb+(item.amount*1)
              }

          }
          if(item.type===1){
            if(item.category==='Income'){
              inc=inc+(item.amount*1)
            }
            if(item.category==='Salary'){
              sal=sal+(item.amount*1)
            }
            if(item.category==='Profit'){
              pro=pro+(item.amount*1)
            }
            if(item.mode==='Credit Card'){
              crec=cre+(item.amount*1)
            }
            if(item.mode==='Debit Card'){
              debc=debc+(item.amount*1)
            }
            if(item.mode==='UPI'){
              upic=upic+(item.amount*1)
            }
            if(item.mode==='Cash'){
              cashc=cashc+(item.amount*1)
            }
            if(item.mode==='NetBanking'){
              netbc=netbc+(item.amount*1)
            }
          }
      })
      const monthlyDebit =[travel, food, bev, gro, sho, inv , bill, beauty, hh, sc, bk, clo, eg , oth];
      const monthlyCredit=[inc,sal,pro];
      const monthlyDebitMode=[deb,cre,upi,cash,netb];
      const monthlyCreditMode=[debc,crec,upic,cashc,netbc];
      // console.log(monthlyDebitMode[1]-monthlyCreditMode[1]);
    return (
      <div className="container">
        <Container component="main">
          <CssBaseline />
          <Paper item alignContent="center" spacing={2} elevation={8}>
          <div className={classes.paperBalance}>
          <CardContent>
          <h2>Received Today</h2>
          <PieCredit data={dailyCredit}/>
          <Typography component="h3" variant="subtitle2" color="primary">
            on {new Intl.DateTimeFormat('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}).format(Date.now())}
          </Typography>
          </CardContent>
          </div>
          </Paper>
          </Container>
          <Container component="main">
          <CssBaseline />
          <Paper item alignContent="center" spacing={2} elevation={8}>
          <div className={classes.paperBalance}>
          <CardContent>
          <h2>Spent Today</h2>
          <PieDebit data={dailyDebit}/>
          <Typography component="h3" variant="subtitle2" color="primary">
            on {new Intl.DateTimeFormat('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}).format(Date.now())}
          </Typography>
          </CardContent>
          </div>
          </Paper>
          </Container>      
          <Container component="main">
          <CssBaseline />
          <Paper item alignContent="center" spacing={2} elevation={8}>
          <div className={classes.paperBalance}>
          <CardContent>
          <h2>Received This Month</h2>
          <PieCredit data={monthlyCredit} />
          <Typography component="h3" variant="subtitle2" color="primary">
          as on {new Intl.DateTimeFormat('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}).format(Date.now())}
          </Typography>
          </CardContent>
          </div>
          </Paper>
          </Container>
          <Container component="main">
          <CssBaseline />
          <Paper item alignContent="center" spacing={2} elevation={8}>
          <div className={classes.paperBalance}>
          <CardContent>
          <h2>Spent This Month</h2>
          <PieDebit data={monthlyDebit}/>
          <Typography component="h3" variant="subtitle2" color="primary">
          as on {new Intl.DateTimeFormat('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}).format(Date.now())}
          </Typography>
          </CardContent>
          </div>
          </Paper>
          </Container>
          <Container component="main">
          <CssBaseline />
          <Paper item alignContent="center" spacing={2} elevation={8}>
          <div className={classes.paperBalance}>
          <CardContent>
          <h2>Received This Month (Mode of Transaction)</h2>
          <PieCreditMode data={monthlyCreditMode}/>
          <Typography component="h3" variant="subtitle2" color="primary">
          as on {new Intl.DateTimeFormat('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}).format(Date.now())}
          </Typography>
          </CardContent>
          </div>
          </Paper>
          </Container>
          <Container component="main">
          <CssBaseline />
          <Paper item alignContent="center" spacing={2} elevation={8}>
          <div className={classes.paperBalance}>
          <CardContent>
          <h2>Spent This Month (Mode of Transaction)</h2>
          <PieDebitMode data={monthlyDebitMode}/>
          <Typography component="h3" variant="subtitle2" color="primary">
          as on {new Intl.DateTimeFormat('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}).format(Date.now())}
          </Typography>
          </CardContent>
          </div>
          </Paper>
          </Container>
          <Container component="main">
          <CssBaseline />
          <Paper item alignContent="center" spacing={2} elevation={8}>
          <div className={classes.paperBalance}>
          <CardContent>
          <h2>Estimated Credit Card Bill for this month</h2>
          <Typography component="h4" variant="h4">
         <i class="fa fa-inr"></i> {monthlyDebitMode[1]-monthlyCreditMode[1]}
          </Typography>
          <Typography component="h3" variant="subtitle2" color="primary">
          as on {new Intl.DateTimeFormat('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}).format(Date.now())}
          </Typography>
          </CardContent>
          </div>
          </Paper>
          </Container>
          {/* <Container component="main">
          <CssBaseline />
          <Paper item alignContent="center" spacing={2} elevation={8}>
          <div className={classes.paperBalance}>
          <CardContent>
          <h2>Estimated Cash Available</h2>
          <Typography component="h4" variant="h4">
         <i class="fa fa-inr"></i> {monthlyCreditMode[3]-monthlyDebitMode[3]}
          </Typography>
          <Typography component="h3" variant="subtitle2" color="primary">
          as on {new Intl.DateTimeFormat('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}).format(Date.now())}
          </Typography>
          </CardContent>
          </div>
          </Paper>
          </Container> */}
      </div>
    );
    }
    else{
      return(
      <NoData/>
      )
    }

}
function handleSignOut(){
  firebase.auth().signOut();
  // return(
  // <Switch>
  // <Redirect from='/dashboard' to='/' />
  // <Route path='/'>
  //   <SignIn/>
  // </Route>
  // </Switch>
  // )
}
function ProfileCard(){
  const classes= useStyles();
  const uid=(firebase.auth().currentUser||{}).uid
  const [displayName, setDisplayName]=useState('');
  const [error, setError]=useState('');
  if(uid){
    firebase.firestore().collection("users").doc(uid).get()
    .then(function(doc) {
      if(doc.exists){
        setDisplayName(doc.data().displayName)
      }
      })
    .catch(error=>{
      setError(error.message)
    })
  }
    if(displayName){
    return(
      // <div className={classes.container}>
      <div>
          {/* <Navigation /> */}
          <CssBaseline/>
          <Paper item alignContent="center" spacing={2} elevation={8} className={classes.card}>
          <CardContent>
          <Typography variant="subtitle1" component="h4"><h3>Hey ! </h3> <Typography variant="h6" component="h4"><h2>{displayName}</h2></Typography></Typography>
          <Typography variant="subtitle1" component="h4"><h3>Hope you're day is going great !</h3></Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={handleSignOut}
          >
           Log Out
          </Button>
          </CardContent>
          </Paper>
      </div>
  );
  }
  else{
    return(
      <Loading/>
    );
  }

}

function DashboardComponent() {
  const classes= useStyles();
  return(
    <div>
    <ProfileCard/>
    <CssBaseline/>
    <Paper item alignContent="center" spacing={2} elevation={8} className={classes.card}>
    <CardContent>
    <Typography variant="subtitle1" component="h4"><h3>Your Transaction Statistics Appear Below</h3></Typography>
    </CardContent>
    </Paper>
    <Dashboard/>
    </div>
  );
}
export default DashboardComponent;