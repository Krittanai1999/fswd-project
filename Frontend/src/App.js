import React from "react";
import logo from "./img/logo.png";
import cart from "./img/shopping-cart.png";
import user from "./img/user.png";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   NavLink,
// } from "react-router-dom";
// import Swiper from "react-id-swiper";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "swiper/swiper-bundle.css";

// import Home from "./Components/Home/Home";
// import Footer from "./Components/Footer/Footer";
// import Login from "./Components/Login";
// import Register from "./Components/Register";

// import Navigation from "./Components/Navigation";

function App() {
  return (
    <>
      <nav className="Navbar-nav">
        <div className="header-top">
          <div className="header-top-container">
            <a href="/" className="logo-box">
              <div className="logo-img">
                <img src={logo} alt="" height="100%" />
              </div>
            </a>

            <div className="search-box">
              <div className="search-field">
                <input
                  type="search"
                  className="search-input"
                  placeholder="Seach for products.."
                />
              </div>
            </div>

            <div className="header-icon-box">
              <a
                href="/"
                title="shopping cart"
                className="header-shopping-cart-box"
              >
                <img src={cart} alt="" height="100%" />
              </a>
              <div className="header-user-icon">
                <img src={user} alt="" height="90%" />
              </div>
              <div className="header-user-login">
                <a href="/admin" className="user-list">
                  <h5>Login</h5>
                </a>
                <span>|</span>
                <a href="/register" className="user-list">
                  <h5>Register</h5>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="header-menu">
          <ul className="header-menu-container">
            <a href="/" className="catagory-menu">
              <li>New</li>
            </a>
            <a href="/" className="catagory-menu">
              <li>Sofas</li>
            </a>
            <a href="/" className="catagory-menu">
              <li>Chairs</li>
            </a>
            <a href="/" className="catagory-menu">
              <li>Tables</li>
            </a>
            <a href="/" className="catagory-menu">
              <li>Beds</li>
            </a>
            <a href="/" className="catagory-menu">
              <li>Wardrobes</li>
            </a>
            <a href="/" className="catagory-menu">
              <li>Drawer & Shelf</li>
            </a>
            <a href="/" className="catagory-menu">
              <li>Lighting</li>
            </a>
            <a href="/" className="catagory-menu">
              <li>Garden</li>
            </a>
            <a href="/" className="catagory-menu">
              <li>Children's furniture</li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default App;
