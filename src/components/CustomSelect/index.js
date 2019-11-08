import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 160,
    width: '100%',
  },
}));

function CustomSelect(props) {
  const classes = useStyles();

  const {
    className,
    label,
    value,
    items,
    onChange,
  } = props;

  const [state, setState] = useState(value);

  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = (event) => {
    setState(event.target.value);

    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <FormControl
      variant="outlined"
      className={classnames(className, classes.formControl)}
    >
      <InputLabel ref={inputLabel}>
        {label}
      </InputLabel>

      <Select
        value={state}
        onChange={handleChange}
        labelWidth={labelWidth}
      >
        {items.map((item) => (
          <MenuItem value={item} key={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

CustomSelect.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  items: PropTypes.array,
  onChange: PropTypes.func,
};

CustomSelect.defaultProps = {
  className: '',
  label: '',
  value: '',
  items: [],
  onChange: null,
};

export default CustomSelect;
