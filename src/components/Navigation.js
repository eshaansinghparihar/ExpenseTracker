import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Paper, ThemeProvider, Tabs ,Tab} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AccountBalance from '@material-ui/icons/AccountBalanceWallet';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Link } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
const styles = (theme) => ({
  root: {
    width: '100%',
    height:'13vh'
    // margin:
  },
  paper: {
    marginRight:'auto',
    marginLeft:'auto'
  },
})

class Navigation extends Component{
  
  constructor(props){
    super(props);
    this.state={
      value:'transaction'
    }
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange = (event, newValue) => {
    console.log(newValue)
    this.setState({value:newValue});
  };
  render(){
    const { classes } = this.props;
    return (
      <Paper item alignContent="center" spacing={2} elevation={8} className={classes.paper}>
        <BottomNavigation value={this.state.value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction component={Link} label="Transactions" value="transaction" to='/' icon={<AccountBalance />} />
        <BottomNavigationAction component={Link} label="Add Transaction" value="addTransaction" to='/addTransaction' icon={<AddCircleIcon />}  />
        <BottomNavigationAction component={Link} label="Dashboard" value="dashboard" to='/dashboard' icon={<DashboardIcon />} />
        </BottomNavigation>
        </Paper>
      // <Paper item alignContent="center" spacing={2} elevation={8} className={classes.paper}>
      // <Tabs value={value} onChange={handleChange} className={classes.root}>
      // <Tab label="Transactions" value="transaction" icon={<AddCircleIcon />} to='/' component={Link}  ></Tab>
      // <Tab label="Add Transaction" value="" icon={<AccountBalance />} to='/addTransaction' component={Link}></Tab>
      // <Tab label="Dashboard" value="dashboard" icon={<DashboardIcon />} to='/dashboard' component={Link} ></Tab>
      // </Tabs>
      // </Paper>
    );
  }

}
export default withStyles(styles, { withTheme: true })(Navigation);