import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./components/Redux/redux-store";
import { Provider } from "./StoreContext";

let rerenderAll = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider value={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderAll(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderAll(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
