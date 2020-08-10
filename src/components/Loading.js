import React from 'react';
import firebaseConfig from '../config';
import { makeStyles } from '@material-ui/core/styles';

const useStyles= makeStyles((theme)=>({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(32),
    
  }
}))

function Loading() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      Loading
    </div>
  );
}

export default Loading;
