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

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Router>
            <Route path="/" component={RootComponentWithRoutes} />
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
