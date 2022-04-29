import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Directory from "./components/directory/directory.component.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Hats } from "./components/pages/shoppage/hats/hats.component";
import { Header } from "./components/header/header.component";
import { Shop } from "./components/pages/shoppage/shop.component";
import { Contacts } from "./components/pages/contacts/contacts.component";
import { Homepage } from "./components/pages/homepage/homepage.component";
import { ThemeProvider } from "./components/themecontext/themecontext.component";
import { Jackets } from "./components/pages/shoppage/jackets/jackets.component";
import { Sneakers } from "./components/pages/shoppage/sneakers/sneakers.component";
import { SignIn } from "./components/pages/sign-in/sign-in.component";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/shop" element={<Shop />}></Route>
          <Route exact path="/shop/hats" element={<Hats />}></Route>
          <Route exact path="/shop/jackets" element={<Jackets />}></Route>
          <Route exact path="/shop/sneakers" element={<Sneakers />}></Route>
          <Route exact path="/contacts" element={<Contacts />}></Route>
          <Route exact path="/signin" element={<SignIn />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
