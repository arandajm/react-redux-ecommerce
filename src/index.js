import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { Provider } from "react-redux";
import reducer from "./reducer";

// Create a redux store
const store = createStore(reducer, applyMiddleware(createLogger()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
