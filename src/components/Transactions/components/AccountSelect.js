import React from "react";
import Select from "react-select";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  input: {
    display: "flex",
    padding: 0,
    height: "auto"
  },
  valueContainer: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    overflow: "hidden"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  }
}));

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { classes, TextFieldProps }
  } = props;

  return (
    <TextField
      className={classes.textField}
      InputProps={{
        inputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps
        }
      }}
      {...TextFieldProps}
    />
  );
}

function Option(props) {
  const classes = useStyles();
  return (
    <MenuItem
      classes={{ root: classes.root }}
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

const components = {
  Control,
  Option
};

export default function AccountSelect(props) {
  const classes = useStyles();

  const findValueObjectFromOptions = () => {
    return props.options.find(option => option.value === props.value);
  };

  return (
    <div style={{ width: "300px" }}>
      <Select
        classes={classes}
        inputId="react-select-single"
        TextFieldProps={{
          label: "Accounts",
          InputLabelProps: {
            htmlFor: "react-select-single",
            shrink: true
          }
        }}
        placeholder={props.placeholderText}
        options={props.options}
        components={components}
        value={findValueObjectFromOptions()}
        onChange={val => props.onChange(val)}
      />
    </div>
  );
}
