import React , { useEffect, useState } from 'react';
import * as firebase from 'firebase';
import { makeStyles } from '@material-ui/core/styles';
import { Paper ,Container, Grid , CssBaseline, TextField ,CardContent , Button, Typography , InputLabel, Select , MenuItem, FormControl} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(2),
        
      },
      paperBalance:{
        //   borderBottom:'10px solid #FFD700',
          alignItems:'center',
          width:'100%',
          justifyContent:'center',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          minWidth:'100'
      },
      transactionCard:{
        //   height:'40vh',
          width:'40vh',
          borderRadius:'50%',
          justifyContent:'center',
          alignItem:'center'

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
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Paper item alignContent="center" spacing={2} elevation={8}>
    <div className={classes.paperBalance}>
    <CardContent>
    <Typography component="h3" variant="h5" color="primary">
        Balance
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
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper item alignContent="center" spacing={2} elevation={8}>
            <div className={classes.transactionCard}>
            <CardContent>
            <Typography component="h3" variant="h5" color="primary">
                {transactionitem.details}
            </Typography>
            <br></br>
            <Typography component="h4" variant="h4">
             <i class="fa fa-inr"></i> {transactionitem.amount}
            </Typography>
            <Typography component="h4" variant="h4">
             {transactionitem.mode}
            </Typography>
            <Typography component="h4" variant="h4">
             {transactionitem.category}
            </Typography>
            <Typography component="h4" variant="h4">
             {new Intl.DateTimeFormat('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' , hour: '2-digit', minute: '2-digit'}).format(transactionitem.createdAt)}
            </Typography>
            </CardContent>
            </div>
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
    return(
        <div className={classes.container}>
            <Balance/>
            <TransactionDetails/>
        </div>
    )
}
export default TransactionDetailsComponent;