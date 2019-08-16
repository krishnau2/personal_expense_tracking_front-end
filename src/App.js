import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import "./App.css";

import DrawerNavigation from "./components/Common/DrawerNavigation";
import Summary from "./components/Summary";
import BankAccounts from "./components/BankAccounts";
import CashAccounts from "./components/CashAccounts";
import Budget from "./components/Budget";
import Reports from "./components/Reports";
import Settings from "./components/Settings";
import Transaction from "./components/Transactions/Transactions";

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
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          component="a"
          href="/new_transaction"
        >
          <AddIcon />
          New Transaction
        </Button>
        <Router>
          <div>
            <Route exact path="/" component={Summary} />
            <Route path="/bank_accounts" component={BankAccounts} />
            <Route path="/cash_accounts" component={CashAccounts} />
            <Route path="/budget" component={Budget} />
            <Route path="/reports" component={Reports} />
            <Route path="/settings" component={Settings} />
            <Route path="/new_transaction" component={Transaction} />
          </div>
        </Router>
      </main>
    </div>
  );
}

export default App;
