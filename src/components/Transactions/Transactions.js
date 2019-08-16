import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export default function Transactions() {
  const classes = useStyles();
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/accounts.json");
      const data = await response.json();
      setAccounts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Transactions.</h2>
      <div className="form-container">
        <div className="form-section">
          <div className="section-title">Transaction Type</div>
          <div className="section-content">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Expense
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Transfer
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Receive
            </Button>
          </div>
        </div>
        <div className="form-section">
          <div className="section-title">Source Account</div>
          <div className="section-content">
            <select>
              {accounts.map(account => (
                <option>{account.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-section">
          <div className="section-title">Destination Accounts</div>
          <div className="section-content">
            <select>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Petrol</option>
            </select>
            <input type="text" placeholder="Comments" />
            <input type="text" placeholder="Amount" />
          </div>
          <div className="section-content">
            <select>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Petrol</option>
            </select>
            <input type="text" placeholder="Comments" />
            <input type="text" placeholder="Amount" />
          </div>
          <div className="section-content">
            <select>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Petrol</option>
            </select>
            <input type="text" placeholder="Comments" />
            <input type="text" placeholder="Amount" />
          </div>
        </div>
      </div>
    </div>
  );
}
