import React from 'react';
import {
  Redirect,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import makeStyles from '@material-ui/styles/makeStyles';

import Main from 'containers/Main';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
  },
}));

const App = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Switch>
        <Route
          exact
          path="/"
          component={Main}
          props={props}
        />

        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default withRouter(App);
