import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';

import { fetchStats } from 'store/converts/actions';

const useStyles = makeStyles((theme) => ({
  card: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    padding: theme.spacing(2),
  },
  value: {
    marginLeft: theme.spacing(2),
  },
}));

function Main(props) {
  const classes = useStyles();

  const { stats, fetchStats } = props;

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

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

Main.propTypes = {
  stats: PropTypes.object.isRequired,
  fetchStats: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  stats: store.convertsData.stats,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchStats,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
