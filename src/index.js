import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Directory from "./components/directory/directory.component.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Hats } from "./components/hats/hats.component";
import { Header } from "./components/header/header.component";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Routes>
        <Route exact path="/" element={<Directory />}></Route>
        <Route exact path="/shop/hats" element={<Hats />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
