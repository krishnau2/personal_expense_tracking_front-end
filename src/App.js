import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

import DrawerNavigation from "./components/Common/DrawerNavigation";
import Summary from "./components/Summary";
import BankAccounts from "./components/BankAccounts";
import CashAccounts from "./components/CashAccounts";
import Budget from "./components/Budget";
import Reports from "./components/Reports";
import Settings from "./components/Settings";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <CssBaseline />
      <DrawerNavigation />
      <main className={classes.content}>
        <Router>
          <div>
            <Route exact path="/" component={Summary} />
            <Route path="/bank_accounts" component={BankAccounts} />
            <Route path="/cash_accounts" component={CashAccounts} />
            <Route path="/budget" component={Budget} />
            <Route path="/reports" component={Reports} />
            <Route path="/settings" component={Settings} />
          </div>
        </Router>
      </main>
    </div>
  );
}

export default App;
