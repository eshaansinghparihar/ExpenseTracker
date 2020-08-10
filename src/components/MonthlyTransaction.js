import React , { useEffect, useState } from 'react';
import * as firebase from 'firebase';
import { makeStyles } from '@material-ui/core/styles';
import { Paper ,Container, Grid , CssBaseline, TextField ,Card,CardContent ,Avatar, Button, Typography , InputLabel, Select , MenuItem, FormControl} from '@material-ui/core';
import Loading from './Loading';

const useStyles = makeStyles((theme) => ({
      container: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: theme.spacing(2),
      },
        grid:{
          marginBottom:theme.spacing(2)
        },
        none:{
            marginBottom:theme.spacing(32)
          },
        card:{
            marginTop:theme.spacing(14),
            width:'45vh',
            marginLeft:'auto',
            marginRight:'auto',
            justifyContent:'center',
            alignItems:'center'
          }
      }));

function MonthlyTransactionDetails(){
    let date = new Date();
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0); 
    firstDay.setHours(0,0,0,0);
    lastDay.setHours(23,59,59,999);
    const classes= useStyles();
    const [transaction, setTransaction]=useState([]);
    // const [dailyTransaction, setDailyTransaction]=useState([]);
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
    const MonthlyTransaction=transaction.map(transactionitem=>{
        if(transactionitem.createdAt>=firstDay && transactionitem.createdAt<=lastDay){
        return(
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper item alignContent="center" spacing={2} elevation={8} >
        <Grid container spacing={0} justify="center" className={classes.grid}>
        <Grid item xs={12} md={12} component={Card}>
        <CardContent item xs={12} md={12}>
        {transactionitem.type===1 ? (<Typography variant="h5" component="h2" color="primary">
        {transactionitem.details}
        </Typography>): (<Typography variant="h5" component="h2" color="secondary">
        {transactionitem.details}
        </Typography>)}
        </CardContent>
        </Grid>
        <Grid item xs={12} md={4} component={Card} >
        <CardContent item xs={12} md={12}>
        <Typography color="textSecondary" gutterBottom>
        Amount
        </Typography>
        {transactionitem.type===1 ? (<Typography variant="h5" component="h2" color="primary">
        <i class="fa fa-inr"></i>{transactionitem.amount}
        </Typography>):(<Typography variant="h5" component="h2" color="secondary">
        <i class="fa fa-inr"></i>{transactionitem.amount}
        </Typography>)}
        </CardContent>
        </Grid>
        <Grid item xs={6} md={4} component={Card} >
        <CardContent item xs={12} md={12}>
        <Typography color="textSecondary" gutterBottom>
        Mode Of Payment
        </Typography>
        {transactionitem.type===1 ? (<Typography variant="subtitle2" component="h6" color="primary">
        {transactionitem.mode}
        </Typography>):(<Typography variant="subtitle2" component="h6" color="secondary">
        {transactionitem.mode}
        </Typography>)}
        </CardContent>
        </Grid>
        <Grid item xs={6} md={4} component={Card} >
        <CardContent item xs={12} md={12}>
        <Typography color="textSecondary" gutterBottom >
        Category
        </Typography>
        {transactionitem.type===1 ? (<Typography variant="subtitle2" color="textSecondary" component="h6" color="primary">
        {transactionitem.category}
        </Typography>):(<Typography variant="subtitle2" color="textSecondary" component="h6" color="secondary">
        {transactionitem.category}
        </Typography>)}
        </CardContent>
        </Grid>
        <Grid item xs={12} md={12} component={Card} >
        <CardContent item xs={12} md={12}>
        <Typography color="textSecondary" gutterBottom >
        Date And Time
        </Typography>
        {transactionitem.type===1 ? (<Typography color="textSecondary"  color="primary" >
        {new Intl.DateTimeFormat('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' , hour: '2-digit', minute: '2-digit'}).format(transactionitem.createdAt)}
        </Typography>):(<Typography color="textSecondary" color="secondary">
        {new Intl.DateTimeFormat('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' , hour: '2-digit', minute: '2-digit'}).format(transactionitem.createdAt)}
        </Typography>)}
        </CardContent>
        </Grid>
        </Grid>
        </Paper>
        </Container> 
        );
    }
    }).reverse();
    return(
        <div className={classes.container}>
            {MonthlyTransaction}
        </div>
    )
}
function MonthlyTransactionDetailsComponent(){
    const classes = useStyles();
    return(
        <div>
        <Paper item alignContent="center" spacing={2} elevation={8} className={classes.card}>
            <CardContent>
            <Typography variant="subtitle1" component="h4">Your Monthly Transactions Appear Below</Typography>
            </CardContent>
        </Paper>    
        <MonthlyTransactionDetails/>
        </div>
    );
}
export default MonthlyTransactionDetailsComponent;