import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { initializeProxyStore } from "@/store/proxyStore.js";
import { Provider } from "react-redux";
import "./style.css";

initializeProxyStore().then((store) => {
  ReactDOM.createRoot(document.getElementById("root_iframe")).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});