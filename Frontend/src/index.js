import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import CustomerInfoPage from './CustomerInfoPage';
// import CustomerOrdersPage from './CustomerOrdersPage';
import reportWebVitals from "./reportWebVitals";
import Navigation from "./Components/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
// import CustomerOrderDetailPage from './CustomerOrderDetailPage'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
