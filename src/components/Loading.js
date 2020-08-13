import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

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
      <CircularProgress color="secondary"/>
      <h3>Loading...</h3>
    </div>
  );
}

export default Loading;
