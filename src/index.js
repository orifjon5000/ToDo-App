import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// import Root from "./Root/Index";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
      {/* // <Root /> */}
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);


