import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Directory from "./components/directory/directory.component.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Directory />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
