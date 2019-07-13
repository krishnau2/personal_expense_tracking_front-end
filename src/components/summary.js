import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

import DashboardIcon from '@material-ui/icons/Dashboard';
import BankAccountIcon from '@material-ui/icons/AccountBalance';
import CashAccountIcon from '@material-ui/icons/AccountBalanceWallet';
import BarChartIcon from '@material-ui/icons/BarChart';
import SettingsIcon from '@material-ui/icons/Settings';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export default class Summary extends Component {
  render() {
    return (
      <div className="summary-container">

        <Drawer
          variant="permanent"
        >
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Summary" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <BankAccountIcon />
              </ListItemIcon>
              <ListItemText primary="Bank Accounts" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <CashAccountIcon />
              </ListItemIcon>
              <ListItemText primary="Cash Accounts" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
          <Divider />
          <Avatar>KK</Avatar>
        </Drawer>
        <Container maxWidth="lg" >
          <Grid container spacing={3}>
            {/* Chart
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper >
                <p>Card 1</p>
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper >
                <p>Card 2</p>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  }
}
