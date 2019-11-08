import { BehaviorSubject } from 'rxjs';

import config from 'config';
import { updateStats } from 'store/converts/actions';
import { createSCConnection, getOpenConnection } from './sc-connection';

let appStore = null;
let scRealConnection;
let scRealOpenObservable;

export const realNetworkObservable = new BehaviorSubject(false);

export const setupStore = (store) => {
  appStore = store;
};

export const getSCRealObservable = () => {
  if (scRealConnection) {
    return scRealOpenObservable;
  }

  scRealConnection = createSCConnection({
    port: config.WS.PORT,
    hostname: config.WS.HOST,
    autoReconnect: true,
    // secure: true,
  });

  scRealOpenObservable = getOpenConnection(scRealConnection);

  scRealConnection.subscribe(({ connected }) => {
    realNetworkObservable.next(connected);
  });

  // eslint-disable-next-line no-use-before-define
  getRealTimeData();

  return scRealOpenObservable;
};

export const getRealTimeData = () => {
  getSCRealObservable().subscribe((cli) => {
    if (cli) {
      cli.on('Stats', (data) => {
        appStore.dispatch(updateStats(data));
      });
    }
  });
};
