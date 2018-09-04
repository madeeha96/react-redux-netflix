/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import createReducer from "./reducers";
import homeSaga from "./containers/HomePage/saga.js";

const persistConfig = {
  key: "root",
  storage,
  blackList: ["route"]
};

const persistedReducer = persistReducer(persistConfig, createReducer({}));
const sagaMiddleware = createSagaMiddleware();
export default function configureStore(initialState = {}, history) {
  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const enhancers = [applyMiddleware(...middlewares)];
  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          shouldHotReload: false
        })
      : compose;

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(...enhancers)
  );
  let persistor = persistStore(store);

  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {};
  store.injectedSagas = {};
  store.runSaga(homeSaga);

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      store.replaceReducer(createReducer(store.injectedReducers));
      store.dispatch({ type: "@@REDUCER_INJECTED" });
    });
  }

  return { store, persistor };
}
