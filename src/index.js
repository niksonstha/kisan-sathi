import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GoogleTranslateWidget from "../src/components/Header/GoogleTranslateWidget.js"; // Import the GoogleTranslateWidget component
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "../src/context/AuthContext";

const element = document.getElementById("root");

// Create a root using ReactDOM.createRoot()
const root = ReactDOM.createRoot(element);

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Router>
        {/* <GoogleTranslateWidget /> */}
        <App />
      </Router>
    </AuthContextProvider>
  </React.StrictMode>
);
