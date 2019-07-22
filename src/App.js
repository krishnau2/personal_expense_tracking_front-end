import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import Summary from "./components/Summary";
import BankAccounts from "./components/BankAccounts";
import CashAccounts from "./components/CashAccounts";
import Budget from "./components/Budget";
import Reports from "./components/Reports";
import Settings from "./components/Settings";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
