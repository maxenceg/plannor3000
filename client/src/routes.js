// @flow
// $FlowFixMe flow is not ready for Suspense or lazy today
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';

import Home from './pages/Home';

const routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Suspense>
);

export default routes;
