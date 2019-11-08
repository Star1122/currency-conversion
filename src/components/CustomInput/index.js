import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextField from '@material-ui/core/TextField';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(() => ({
  textField: {
    minWidth: 160,
    width: '100%',
  },
}));

function CustomInput(props) {
  const classes = useStyles();

  const {
    className,
    label,
    type,
    value,
    onChange,
  } = props;

  const [state, setState] = useState(value);

  const handleChange = (event) => {
    setState(event.target.value);

    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <TextField
      className={classnames(className, classes.textField)}
      label={label}
      type={type}
      margin="none"
      variant="outlined"
      defaultValue={state}
      onChange={handleChange}
    />
  );
}

CustomInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
};

CustomInput.defaultProps = {
  className: '',
  label: '',
  type: 'text',
  value: '',
  onChange: null,
};

export default CustomInput;
