import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';

import { fetchCurrencies } from 'store/rates/actions';
import { convert } from 'store/converts/actions';
import { CustomInput, CustomSelect } from 'components';

const useStyles = makeStyles((theme) => ({
  box: {
    width: '100%',
    height: '100%',

    [theme.breakpoints.down('xs')]: {
      height: 'unset',
      marginTop: theme.spacing(3),
    },
  },
  container: {
    width: 400,
    maxWidth: '100%',
    padding: theme.spacing(3),
  },
  mb: {
    marginBottom: theme.spacing(2),
  },
  button: {
    height: theme.spacing(7),
    fontSize: 20,
  },
}));

function ConvertForm(props) {
  const classes = useStyles();

  const {
    currencies,
    converted,
    isConverting,
    fetchCurrencies,
    convert,
  } = props;

  const [state, setState] = useState({
    amount: 1,
    from: 'USD',
    to: 'EUR',
  });

  useEffect(() => {
    fetchCurrencies();
  }, [fetchCurrencies]);

  const handleChange = (field) => (value) => {
    setState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleClick = () => {
    convert(state);
  };

  return (
    <Box
      className={classes.box}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {currencies.length === 0 ? (
        <CircularProgress />
      ) : (
        <Card className={classes.container}>
          <Typography variant="h5" className={classes.mb}>Currency Converter</Typography>

          <CustomInput
            className={classes.mb}
            label="Amount"
            type="number"
            value={state.amount}
            onChange={handleChange('amount')}
          />

          <CustomSelect
            className={classes.mb}
            label="From"
            value={state.from}
            items={currencies}
            onChange={handleChange('from')}
          />

          <CustomSelect
            className={classes.mb}
            label="To"
            value={state.to}
            items={currencies}
            onChange={handleChange('to')}
          />

          {converted && (
            <Typography className={classes.mb} align="center">
              {`${state.amount} ${state.from} = ${converted.toFixed(6)} ${state.to}`}
            </Typography>
          )}

          <Button
            className={classes.button}
            variant="contained"
            size="large"
            color="primary"
            fullWidth
            disabled={isConverting}
            onClick={handleClick}
          >
            {isConverting ? (
              <CircularProgress size={30} />
            ) : 'Convert'}
          </Button>
        </Card>
      )}
    </Box>
  );
}

ConvertForm.propTypes = {
  currencies: PropTypes.array.isRequired,
  converted: PropTypes.number,
  isConverting: PropTypes.bool.isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
  convert: PropTypes.func.isRequired,
};

ConvertForm.defaultProps = {
  converted: null,
};

const mapStateToProps = (store) => ({
  currencies: store.ratesData.currencies,
  converted: store.convertsData.converted,
  isConverting: store.convertsData.isConverting,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchCurrencies,
  convert,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ConvertForm);
