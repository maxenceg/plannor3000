import React from 'react';

import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from 'redux-persist';
import { RouteComponentProps } from 'react-router-dom';
import { Route } from 'react-router';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from './theme';
import Routes from './routes';
import Root from './components/Root';

interface Props {
  history: History;
  persistor: Persistor;
  store: Store;
}

const RootComponentWithRoutes: React.SFC = () => (
  <Root>
    <Routes />
  </Root>
);

const App: React.SFC<Props> = ({ history, persistor, store }) => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Route path="/" component={RootComponentWithRoutes} />
        </ConnectedRouter>
      </PersistGate>
    </MuiThemeProvider>
  </Provider>
);

export default App;
