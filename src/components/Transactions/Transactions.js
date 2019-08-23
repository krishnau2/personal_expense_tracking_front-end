import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import NoSsr from "@material-ui/core/NoSsr";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import AccountSelect from "./components/AccountSelect";
import TransactionRow from "./components/TransactionRows";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const accountsList = accounts => {
  return accounts.map(account => ({
    value: account.id,
    label: account.name
  }));
};

export default function Transactions(props) {
  const classes = useStyles();
  const [accounts, setAccounts] = useState([]);
  const [transactionRowData, setTransactionRowData] = useState([{}, {}, {}]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/accounts.json");
      const data = await response.json();
      let list = accountsList(data);
      setAccounts(list);
    };
    fetchData();
  }, []);

  const handleAddRow = () => {
    setTransactionRowData([...transactionRowData, {}]);
  };

  // console.log("rows ", transactionRowData);
  // console.log("URL params", props.match.params.type);

  return (
    <NoSsr>
      <div>
        <h2>Create {props.match.params.type} Transaction.</h2>
        <div className="form-container">
          <div className="form-section">
            <div className="section-title">From Account</div>
            <div className="section-content">
              <AccountSelect
                options={accounts}
                placeholderText="Select from account"
              />
            </div>
          </div>
          <div className="form-section">
            <div className="section-title">To Accounts</div>
            {transactionRowData.map(row => (
              <TransactionRow options={accounts} />
            ))}
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={handleAddRow}
            >
              <AddIcon /> Add row
            </Button>
          </div>
        </div>
      </div>
    </NoSsr>
  );
}
