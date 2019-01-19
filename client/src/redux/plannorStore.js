import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import thunkMiddleware from "redux-thunk";

export default function configureStore() {
  // use devtools if we are in a browser and the extension is enabled
  let composeEnhancers =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  // middlewares
  let middlewares = [thunkMiddleware];

  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  return store;
}
