import { createStore, applyMiddleware, compose } from 'redux';
// See
// https://github.com/gaearon/redux-thunk and http://redux.js.org/docs/advanced/AsyncActions.html
import thunkMiddleware from 'redux-thunk';
import reducers, { initialStates } from './reducers';

export default function configureStore(props, context) {
  // This is how we get initial props from Symfony into redux.
  const { trelloUserState } = initialStates;

  // Redux expects to initialize the store using an Object
  const initialState = {
    trelloUserState: { ...trelloUserState },
  };

  // use devtools if we are in a browser and the extension is enabled
  let composeEnhancers =
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  // middlewares
  let middlewares = [thunkMiddleware];

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
  return store;
}
