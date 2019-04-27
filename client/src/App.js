import './App.scss';
import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from './theme';
import Routes from './routes';
import Root from './components/Root';
import configureStore from './redux/plannorStore';

const RootComponentWithRoutes = () => (
  <Root>
    <Routes />
  </Root>
);

const appBasename = process.env.NODE_ENV === 'production' ? '/plannor3000' : '';

const store = configureStore();

export default class App extends React.Component {
  render() {
    Notification.requestPermission(function(status) {
      console.log('Notification permission status:', status);
    });

    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Router basename={appBasename}>
            <Route path="/" component={RootComponentWithRoutes} />
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
