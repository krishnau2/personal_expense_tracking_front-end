import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import DashboardIcon from "@material-ui/icons/Dashboard";
import BankAccountIcon from "@material-ui/icons/AccountBalance";
import CashAccountIcon from "@material-ui/icons/AccountBalanceWallet";
import BudgetIcon from "@material-ui/icons/Work";
import BarChartIcon from "@material-ui/icons/BarChart";
import SettingsIcon from "@material-ui/icons/Settings";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    background: "#2757ae",
    color: "#fff",
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  },
  listItemIconRoot: {
    color: "#fff"
  },
  item: {
    background: "#2757ae",
    "&:hover": {
      background: "rgb(210, 112, 175)"
    }
  }
}));

export default function Summary() {
  const classes = useStyles();

  return (
    <div className="summary-container">
      <Drawer
        variant="permanent"
        classes={{ paper: classes.paper }}
        className={`${classes.drawerPaper}`}
      >
        <Divider />
        <List>
          <ListItem button classes={{ root: classes.item }}>
            <ListItemIcon
              classes={{
                root: classes.listItemIconRoot
              }}
            >
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Summary" />
          </ListItem>
          <ListItem button classes={{ root: classes.item }}>
            <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
              <BankAccountIcon />
            </ListItemIcon>
            <ListItemText primary="Bank Accounts" />
          </ListItem>
          <ListItem button classes={{ root: classes.item }}>
            <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
              <CashAccountIcon />
            </ListItemIcon>
            <ListItemText primary="Cash Accounts" />
          </ListItem>
          <ListItem button classes={{ root: classes.item }}>
            <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
              <BudgetIcon />
            </ListItemIcon>
            <ListItemText primary="Budget" />
          </ListItem>
          <ListItem button classes={{ root: classes.item }}>
            <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
          <ListItem button classes={{ root: classes.item }}>
            <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
        <Divider />
        <Avatar>KK</Avatar>
      </Drawer>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper>
                <p>Card 1</p>
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper>
                <p>Card 2</p>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
