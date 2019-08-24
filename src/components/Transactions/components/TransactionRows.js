import React from "react";
import TextField from "@material-ui/core/TextField";
import RemoveIcon from "@material-ui/icons/Close";
import AccountSelect from "./AccountSelect";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function TransactionRows(props) {
  const classes = useStyles();

  return (
    <div className="section-content" className={classes.container}>
      <AccountSelect
        options={props.options}
        placeholderText="Select To account"
        value={props.rowValues.accountId}
        onChange={value => props.handleAccountSelect(props.rowId, value)}
      />
      <TextField
        id="standard-with-placeholder"
        label="Notes"
        placeholder="Notes"
        className={classes.textField}
        margin="normal"
        value={props.rowValues.note}
        onChange={event =>
          props.handleInputFieldChange(props.rowId, "note", event)
        }
      />
      <TextField
        id="standard-number"
        label="Amount"
        placeholder="Amount"
        className={classes.textField}
        type="number"
        margin="normal"
        value={props.rowValues.amount}
        onChange={event =>
          props.handleInputFieldChange(props.rowId, "amount", event)
        }
      />
      <RemoveIcon onClick={() => props.handleRemoveRowClick(props.rowId)} />
    </div>
  );
}
