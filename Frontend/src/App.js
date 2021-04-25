// MAIN NAVBAR
import React from "react";
import logo from "./img/logo.png";
import cart from "./img/shopping-cart.png";
import user from "./img/user.png";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "swiper/swiper-bundle.css";

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
                <a href="/login" className="user-list">
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
              <li>Living Room</li>
            </a>
            <a href="/" className="catagory-menu">
              <li>Bathroom</li>
            </a>
            <a href="/" className="catagory-menu">
              <li>Bedroom</li>
            </a>
            <a href="/" className="catagory-menu">
              <li>Kitchen</li>
            </a>
            <a href="/" className="catagory-menu">
              <li>Other</li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default App;
