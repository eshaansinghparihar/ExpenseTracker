import React,{Component} from 'react';
import { Paper, Tab ,Tabs} from '@material-ui/core';
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
    '& > svg': {
      margin: theme.spacing(0),
    },
    marginLeft:'auto',
    marginRight:'auto',
  },
})

class Navigation extends Component{
  
  constructor(props){
    super(props);
    this.state={
      value: window.location.pathname
    }
  }
  render(){
    const { classes } = this.props;
    return (
      (this.state.value==='/addTransaction' || this.state.value==='/dashboard')?(
      <Paper item alignContent="center" elevation={8} spacing={2} className={classes.paper} >
        <Tabs variant="fullWidth" value={this.state.value} onChange={(event, newValue) => {this.setState({value:newValue});}} className={classes.root}>
        < Tab component={Link} label="Home" value="/" to='/' icon={<AccountBalance fontSize="small"/>}/>
        <Tab component={Link} label="Daily" value="/dailyTransaction" to='/dailyTransaction' icon={<TodayIcon fontSize="small"/>}/>
        <Tab component={Link} label="Add" value="/addTransaction" to='/addTransaction' icon={<AddCircleIcon fontSize="small" />}  />
        <Tab component={Link} label="Monthly" to='/monthlyTransaction' value="/monthlyTransaction" icon={<CalendarViewDayIcon fontSize="small" />} />
        <Tab component={Link} label="Profile" to='/dashboard' value="/dashboard" icon={<DashboardIcon fontSize="small"/>} />
        </Tabs>
        </Paper>
        ):(<div  className="float"><Paper item alignContent="center" spacing={2} elevation={8} className={classes.paper} >
        <Tabs variant="fullWidth" value={this.state.value} onChange={(event, newValue) => {this.setState({value:newValue});}} className={classes.root}>
        <Tab component={Link} label="Home" value="/" to='/' icon={<AccountBalance fontSize="small"/>}/>
        <Tab component={Link} label="Daily" value="/dailyTransaction" to='/dailyTransaction' icon={<TodayIcon fontSize="small"/>}/>
        <Tab component={Link} label="Add" value="/addTransaction" to='/addTransaction' icon={<AddCircleIcon fontSize="small"/>}  />
        <Tab component={Link} label="Monthly" to='/monthlyTransaction' value="/monthlyTransaction" icon={<CalendarViewDayIcon fontSize="small" />} />
        <Tab component={Link} label="Profile" to='/dashboard' value="/dashboard" icon={<DashboardIcon />} />
        </Tabs>
        </Paper>
        </div>)
    );
  }

}
export default withStyles(styles, { withTheme: true })(Navigation);