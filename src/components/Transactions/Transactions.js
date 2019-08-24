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

const defaultTransactionRows = () => {
  let defaultRows = {};
  for (let i = 1; i <= 3; i++) {
    defaultRows[Date.now() + i] = { accountId: 0, note: "", amount: 0 };
  }
  return defaultRows;
};

export default function Transactions(props) {
  const classes = useStyles();
  const [accounts, setAccounts] = useState([]);
  const [fromAccountValue, setFromAccountValue] = useState(0);
  const [transactionRowData, setTransactionRowData] = useState(
    defaultTransactionRows()
  );

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
    let newData = { ...transactionRowData };
    newData[Date.now()] = { accountId: 0, note: "", amount: 0 };
    setTransactionRowData(newData);
  };

  const handleRemoveRowClick = row => {
    let filteredRowData = { ...transactionRowData };
    delete filteredRowData[row];
    setTransactionRowData(filteredRowData);
  };

  const handleFromAccountSelect = option => {
    setFromAccountValue(option.value);
  };

  const handleAccountSelect = (row, option) => {
    let filteredRowData = { ...transactionRowData };
    filteredRowData[row].accountId = option.value;
    setTransactionRowData(filteredRowData);
  };

  const handleInputFieldChange = (row, field, event) => {
    let filteredRowData = { ...transactionRowData };
    filteredRowData[row][field] = event.target.value;
    setTransactionRowData(filteredRowData);
  };

  console.log("rowData ", transactionRowData);

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
                values={fromAccountValue}
                onChange={handleFromAccountSelect}
              />
            </div>
          </div>
          <div className="form-section">
            <div className="section-title">To Accounts</div>
            {Object.keys(transactionRowData).map(key => (
              <TransactionRow
                options={accounts}
                rowId={key}
                rowValues={transactionRowData[key]}
                handleRemoveRowClick={handleRemoveRowClick}
                handleAccountSelect={handleAccountSelect}
                handleInputFieldChange={handleInputFieldChange}
              />
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
