import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./scss/main.scss";
import NavbarComponent from "./component/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavbarComponent />
    <App />
  </React.StrictMode>
);
