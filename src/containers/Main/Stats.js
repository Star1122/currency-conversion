import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  card: {
    position: 'absolute',
    top: theme.spacing(3),
    right: theme.spacing(3),
    maxWidth: '100%',
    padding: theme.spacing(3),

    [theme.breakpoints.down('xs')]: {
      position: 'relative',
      top: 0,
      right: 0,
    },
  },
  value: {
    marginLeft: theme.spacing(2),
  },
}));

function Stats(props) {
  const classes = useStyles();

  const { stats } = props;

  return (
    <>
      {stats.popular && (
        <Card className={classes.card}>
          <Box mb={1} display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Popular destination currency:</Typography>
            <Typography className={classes.value}>{stats.popular}</Typography>
          </Box>
          <Box mb={1} display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Total converted amount (in USD):</Typography>
            <Typography className={classes.value}>{stats.totalConverted}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Total number of conversion:</Typography>
            <Typography className={classes.value}>{stats.totalCount}</Typography>
          </Box>
        </Card>
      )}
    </>
  );
}

Stats.propTypes = {
  stats: PropTypes.object.isRequired,
};

const mapStateToProps = (store) => ({
  stats: store.convertsData.stats,
});

export default connect(mapStateToProps)(Stats);
