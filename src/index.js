import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css";

import App from "./App";
import Home from "./components/main/Home";
import Menu from "./components/main/Menu";
import About from "./components/main/About";
import Contact from "./components/main/Contact";
import Order from "./components/main/Order";
import RegisterPage from "./components/login/RegisterPage";
import ResetPassword from "./components/login/ResetPassword";

const routing = (
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/dashboard" element={<Home />} />
      <Route exact path="/menu" element={<Menu />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/order" element={<Order />} />
      <Route exact path="/register" element={<RegisterPage />} />
      <Route exact path="/forgetpassword" element={<ResetPassword />} />
    </Routes>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
