import "babel-polyfill";
import { PersistGate } from "redux-persist/integration/react";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import FontFaceObserver from "fontfaceobserver";
import createHistory from "history/createBrowserHistory";
import "sanitize.css/sanitize.css";
import App from "containers/App";
import "!file-loader?name=[name].[ext]!./images/favicon.ico";
import "styles/theme.scss";
import configureStore from "./configureStore";
const openSansObserver = new FontFaceObserver("Open Sans", {});
const history = createHistory();
const store = configureStore();
const MOUNT_NODE = document.getElementById("app");

const render = () => {
  ReactDOM.render(
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </PersistGate>
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  module.hot.accept(["containers/App"], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
