import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Paper, ThemeProvider, Tabs ,Tab} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TodayIcon from '@material-ui/icons/Today';
import AccountBalance from '@material-ui/icons/AccountBalanceWallet';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Link } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import './Navigation.css';
const styles = (theme) => ({
  root: {
    width: '100%',
    height:'13vh',

    // left:'20px',
    // right:'20px'
    // margin:
  },
  paper: {
    marginRight:'auto',
    marginLeft:'auto',
  },
  AccBal:{
    color:theme.palette.primary.main
  },
  AddCir:{
    color:theme.palette.secondary.main
  },
  Dashboard:{
    color:theme.palette.primary.light
  }
})

class Navigation extends Component{
  
  constructor(props){
    super(props);
    this.state={
      value:'transaction'
    }
  }
  render(){
    const { classes } = this.props;
    return (
      (this.state.value!=='addtransaction')?(<div  className="float">
      <Paper item alignContent="center" spacing={2} elevation={8} className={classes.paper} >
        <BottomNavigation value={this.state.value} onChange={(event, newValue) => {this.setState({value:newValue});}} className={classes.root}>
        <BottomNavigationAction component={Link} label="Transactions" value="transaction" to='/' icon={<AccountBalance />}/>
        <BottomNavigationAction component={Link} label="Daily Transaction" value="dailytransaction" to='/dailyTransaction' icon={<TodayIcon />}/>
        {/* className={classes.AccBal}/>}  */}
        <BottomNavigationAction component={Link} label="Add Transaction" value="addtransaction" to='/addTransaction' icon={<AddCircleIcon />}  />
        {/* className={classes.AddCir}  */}
        <BottomNavigationAction component={Link} label="Monthly Transaction" to='/monthlyTransaction' value="monthlytransaction" icon={<CalendarViewDayIcon />} />
        <BottomNavigationAction component={Link} label="Dashboard" to='/dashboard' value="dashboard" icon={<DashboardIcon />} />
        {/* className={classes.Dashboard} */}
        </BottomNavigation>
        </Paper>
        </div>):(<Paper item alignContent="center" spacing={2} elevation={8} className={classes.paper} >
        <BottomNavigation value={this.state.value} onChange={(event, newValue) => {this.setState({value:newValue});}} className={classes.root}>
        <BottomNavigationAction component={Link} label="Transactions" value="transaction" to='/' icon={<AccountBalance />}/>
        <BottomNavigationAction component={Link} label="Daily Transaction" value="dailytransaction" to='/dailyTransaction' icon={<TodayIcon />}/>
        {/* className={classes.AccBal}/>}  */}
        <BottomNavigationAction component={Link} label="Add Transaction" value="addtransaction" to='/addTransaction' icon={<AddCircleIcon />}  />
        {/* className={classes.AddCir}  */}
        <BottomNavigationAction component={Link} label="Monthly Transaction" to='/monthlyTransaction' value="monthlytransaction" icon={<CalendarViewDayIcon />} />
        <BottomNavigationAction component={Link} label="Dashboard" to='/dashboard' value="dashboard" icon={<DashboardIcon />} />
        {/* className={classes.Dashboard} */}
        </BottomNavigation>
        </Paper>)
    );
  }

}
export default withStyles(styles, { withTheme: true })(Navigation);