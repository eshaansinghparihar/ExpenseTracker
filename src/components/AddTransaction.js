import React, { useEffect ,useState } from 'react';
import firebase from 'firebase';
import { Paper ,Container, Grid , CssBaseline, TextField, Button, Typography , InputLabel, Select , MenuItem, FormControl} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Loading from './Loading';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
    marginTop: theme.spacing(2),
    marginRight:theme.spacing(3)
  },
  form: {
    // width: '100vh'
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginLeft:theme.spacing(3),
    marginRight:theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));
function AddTransaction(){
  const classes = useStyles();

  const [amount, setAmount]=useState(0);
  const [details, setDetails]=useState('');
  const [type, setType]=useState('');
  const [mode, setMode]=useState('');
  const [category, setCategory]=useState('');
  const [error, setError]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    const userid=(firebase.auth().currentUser||{}).uid
    if(userid){
      firebase.firestore().collection("users").doc(userid).update({
        transaction:firebase.firestore.FieldValue.arrayUnion({amount:amount,details:details, type:type ,mode:mode, category:category, createdAt: Date.now()}),
        }).catch(error=>setError(error.message))
    }
    setAmount(0);
    setDetails('');
    setType('');
    setMode('');
    setCategory('');
  }
  const handleTypeChange=(e)=>{
    e.preventDefault();
    setType(e.target.value);
  }
  const handleModeChange=(e)=>{
    e.preventDefault();
    setMode(e.target.value);
  }
  const handleCategoryChange=(e)=>{
    e.preventDefault();
    setCategory(e.target.value);
  }
  return(
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Paper item alignContent="center" spacing={2} elevation={8}>
    <div className={classes.paper}>
    <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Typography component="h5" variant="h6" color="primary">
            Add a Transaction
          </Typography>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Amount"
            label="Amount"
            name="amount"
            autoFocus
            autoComplete="false"
            value={amount}
            onInput={ e=>{setAmount(e.target.value)}}
          />
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="details"
            label="Add Transaction Details"
            name="details"
            autoComplete="false"
            multiline
            row={4}
            value={details}
            onInput={ e=>{setDetails(e.target.value)}}
          />
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="type">Transaction Type</InputLabel>
        <Select
          labelId="type"
          id="type"
          value={type}
          required
          onChange={handleTypeChange}
          label="Transaction Type"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={+1}>Credit</MenuItem>
          <MenuItem value={-1}>Debit</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="mode">Transaction Mode</InputLabel>
        <Select
          labelId="mode"
          id="mode"
          value={mode}
          required
          onChange={handleModeChange}
          label="Transaction Mode"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Credit Card">Credit Card</MenuItem>
          <MenuItem value="Debit Card" >Debit Card</MenuItem>
          <MenuItem value="UPI" >UPI</MenuItem>
          <MenuItem value="Cash" >Cash</MenuItem>
          <MenuItem value="NetBanking" >NetBanking</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="category">Transaction Category</InputLabel>
        <Select
          labelId="category"
          id="category"
          required
          value={category}
          onChange={handleCategoryChange}
          label="Category"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {/* {mode === "credit" ? (<MenuItem value="income">Income</MenuItem>) : ('')} */}
          <MenuItem value="Income">Income</MenuItem>
          <MenuItem value="Salary">Salary</MenuItem>
          <MenuItem value="Profit">Profit</MenuItem>
          <MenuItem value="Travel">Travel & Transportation</MenuItem>
          <MenuItem value="Food" >Food</MenuItem>
          <MenuItem value="Beverage" >Beverage</MenuItem>
          <MenuItem value="Grocery" >Grocery</MenuItem>
          <MenuItem value="Shopping" >Shopping</MenuItem>
          <MenuItem value="Investment" >Investment</MenuItem>
          <MenuItem value="Bill Payment" >Bill Payment</MenuItem>
          <MenuItem value="Beauty" >Beauty</MenuItem>
          <MenuItem value="Household" >Household</MenuItem>
          <MenuItem value="Self Care" >Self Care</MenuItem>
          <MenuItem value="Book" >Book</MenuItem>
          <MenuItem value="Clothing" >Clothing</MenuItem>
          <MenuItem value="Electronics & Gadgets" >Electronics & Gadgets</MenuItem>
          <MenuItem value="Others" >Others</MenuItem>
        </Select>
      </FormControl>
          <Typography component="h5" variant="h6" color="error">
          {/* {this.state.error ? this.state.error : ''} */}
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <AddCircleIcon />
          </Button>
          </form>
          </div>
    </Paper>


  </Container>
  );
}
function AddTransactionComponent() {
  const userid=(firebase.auth().currentUser||{}).uid

if(userid){
  return(
    <AddTransaction/>
  );
}
else{
  return(
    <Loading/>
  );
}
}

export default AddTransactionComponent;
