import React, { useState, useEffect } from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import NoSsr from "@material-ui/core/NoSsr";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AccountSelect from "./components/AccountSelect";
import TransactionRow from "./components/TransactionRows";

import { autoCompleteOpionGenerator } from "../../helpers";
import {
  transactionRowDataObject,
  defaultTransactionRowObject
} from "../../Constants";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export default function Transactions(props) {
  const classes = useStyles();
  const [accounts, setAccounts] = useState([]);
  const [fromAccountValue, setFromAccountValue] = useState(0);
  const [transactionRowData, setTransactionRowData] = useState(
    defaultTransactionRowObject()
  );
  const [transactionDate, setTransactionDate] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/accounts.json");
      const data = await response.json();
      let list = autoCompleteOpionGenerator({
        data: data,
        value: "id",
        label: "name"
      });
      setAccounts(list);
    };
    fetchData();
  }, []);

  const handleAddRow = () => {
    let newData = { ...transactionRowData };
    newData[Date.now()] = transactionRowDataObject();
    setTransactionRowData(newData);
  };

  const handleRemoveRow = row => {
    let filteredRowData = { ...transactionRowData };
    delete filteredRowData[row];
    setTransactionRowData(filteredRowData);
  };

  const handleFromAccountSelect = option => {
    setFromAccountValue(option.value);
  };

  const handleToAccountSelect = (row, option) => {
    let filteredRowData = { ...transactionRowData };
    filteredRowData[row].accountId = option.value;
    setTransactionRowData(filteredRowData);
  };

  const handleInputFieldChange = (row, field, event) => {
    let filteredRowData = { ...transactionRowData };
    filteredRowData[row][field] = event.target.value;
    setTransactionRowData(filteredRowData);
  };

  const formatedTransactionDate = date => {
    return moment(date).format("YYYY-MM-DD");
  };

  const handleSubmit = () => {
    console.log("Submit clicked.");
    fetch("/api/v1/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(generateSubmitPayload())
    }).then(response => console.log("Form submit response ", response.json()));
  };

  const generateSubmitPayload = () => {
    let transactionRowPayload = Object.keys(transactionRowData).map(key => ({
      destination_account_id: transactionRowData[key].accountId,
      amount: transactionRowData[key].amount,
      comments: transactionRowData[key].note
    }));
    let payload = {
      source_account_id: fromAccountValue,
      transaction_date: formatedTransactionDate(),
      transactions: transactionRowPayload
    };

    return payload;
  };
  // console.log("rowData ", transactionRowData);

  // console.log("URL params", props.match.params.type);

  return (
    <NoSsr>
      <div>
        <h2>Create {props.match.params.type} Transaction.</h2>
        <div className="form-container">
          <div className="form-section">
            <div className="section-title">Date</div>
            <div className="section-content">
              <DatePicker
                dateFormat="dd/MM/yyyy"
                selected={transactionDate}
                todayButton="Today"
                onChange={date => setTransactionDate(date)}
              />
            </div>
          </div>
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
                handleRemoveRow={handleRemoveRow}
                handleToAccountSelect={handleToAccountSelect}
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
          <div className="form-section">
            <div className="section-content">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={handleSubmit}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </NoSsr>
  );
}
