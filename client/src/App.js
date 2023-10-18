import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Auth from "./Components/Auth/Auth";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
/* -------------------------------------------------------------------------- */

function App() {
  return (
    <GoogleOAuthProvider clientId="760511398776-7eehfoecrs20ch4m8fels4jcs71mbgno.apps.googleusercontent.com">
      <Router>
        <div className="router-family">
          <Nav />
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>

      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
