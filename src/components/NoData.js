import React from 'react';
import firebaseConfig from '../config';
import { makeStyles } from '@material-ui/core/styles';
import { Paper ,Container, Grid , CssBaseline, TextField ,Card,CardContent ,Avatar, Button, Typography , InputLabel, Select , MenuItem, FormControl} from '@material-ui/core';
import NetworkCheckIcon from '@material-ui/icons/NetworkCheck';

const useStyles= makeStyles((theme)=>({
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginTop: theme.spacing(2),
    
//   },
  nodata:{
    //   borderBottom:'10px solid #FFD700',
      margin:theme.spacing(2),
      alignItems:'center',
      width:'100%',
      justifyContent:'center',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft:'auto',
      marginRight:'auto',
      // minWidth:'100'
  },
  avatar: {
    marginTop: theme.spacing(3),
    backgroundColor: theme.palette.secondary.light,
    marginLeft:'auto',
    marginRight:'auto',
    marginBottom: theme.spacing(3),
    // alignItems:'center',
    // justifyItems:'center'
    },
}))

function NoData() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
        <Container component="main">
        <CssBaseline />
        <Paper item alignContent="center" spacing={2} elevation={8}>
        <div  className={classes.nodata}>
        <CardContent>
        <Avatar className={classes.avatar}>
            <NetworkCheckIcon />
        </Avatar>
        <Typography component="h3" variant="subtitle1">Try adding Transactions, if you haven't added one yet.</Typography>
        <Typography component="h3" variant="subtitle1">Data Unavailable, Either the data is being downloaded or isn't available.</Typography>
        </CardContent>
        </div>
        </Paper>
        </Container>
    </div>
  );
}

export default NoData;
