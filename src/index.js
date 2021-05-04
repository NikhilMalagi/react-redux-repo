import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WhatsApp from "./whatsApp/WhatsApp";
import AppHOC from "./AppHOC";
import AppHooks from "./AppHooks";
import Application from "./render-eg/screencast/Application";
import reducer from "./store/reducer";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchAgeUp } from "./sagas/saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAgeUp);
ReactDOM.render(
  <Provider store={store}>
    <WhatsApp />
  </Provider>,
  document.getElementById("root")
);
