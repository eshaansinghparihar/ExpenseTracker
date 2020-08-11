import React , { useEffect, useState } from 'react';
import * as firebase from 'firebase';
import { makeStyles } from '@material-ui/core/styles';
import { Paper ,Container, Grid , CssBaseline, TextField ,Card,CardContent ,Avatar, Button, Typography , InputLabel, Select , MenuItem, FormControl} from '@material-ui/core';
import AccountBalance from '@material-ui/icons/AccountBalanceWallet';
import Loading from './Loading';
const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.dark,
    // alignItems:'center',
    // justifyItems:'center'
  },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(2),
        
      },
      paperBalance:{
        //   borderBottom:'10px solid #FFD700',
          margin:theme.spacing(2),
          marginTop:theme.spacing(14),
          alignItems:'center',
          width:'100%',
          justifyContent:'center',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          // minWidth:'100'
      },
      transactionCard:{
        //   height:'40vh',
          width:'100vh',
          borderRadius:'50%',
          justifyContent:'center',
          alignItem:'center'

      },
      grid:{
        marginBottom:theme.spacing(2)
      },
      message:{
        marginTop:theme.spacing(2),
        marginLeft:'auto',
        marginRight:'auto',
        width:'90%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
      }
    }));
function Balance(){
    const classes = useStyles();
    const [transaction, setTransaction]=useState([]);
    const [error, setError]=useState('');
    const uid=(firebase.auth().currentUser||{}).uid
    useEffect(()=>{
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
    let bal=0;
    transaction.map((item)=>{
      bal=bal+((item.amount)*(item.type))
    })
    return(
    <Container component="main">
    <CssBaseline />
    <Paper item alignContent="center" spacing={2} elevation={8}>
    <div className={classes.paperBalance}>
    <CardContent>
    <Avatar className={classes.avatar}>
          <AccountBalance />
    </Avatar>
    <Typography component="h3" variant="h5" color="primary">
      You have
    </Typography>
    <br></br>
    <Typography component="h4" variant="h4">
         <i class="fa fa-inr"></i> {bal}
    </Typography>
    </CardContent>
    </div>
    </Paper>
    </Container>
    );
}
function TransactionDetails(){
    const classes= useStyles();
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
    const Transaction=transaction.map(transactionitem=>{
        return(
          <Container component="main" >
          <CssBaseline />
          <Paper item alignContent="center" xs={12} md={4} spacing={2} elevation={8}>
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
    }).reverse();
    return(
        <div className={classes.container}>
            {Transaction}
        </div>
    )
}
function TransactionDetailsComponent(){
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
            <Balance/>
            <CssBaseline/>
            <Paper item alignContent="center" spacing={2} elevation={8} className={classes.message}>
            <CardContent>
            <Typography variant="subtitle1" component="h4">Hello ! <Typography variant="h6" component="h4">{displayName}</Typography> , Your Transactions Appear Below</Typography>
            </CardContent>
            </Paper>
            <TransactionDetails/>
        </div>
    );
    }
    else{
      return(
        <Loading/>
      );
    }

}
export default TransactionDetailsComponent;