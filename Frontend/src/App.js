// MAIN NAVBAR
import React, { Fragment, useMemo } from "react";
import { NavLink, useLocation, matchPath } from "react-router-dom";
import { AppBar, Toolbar, Button, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSession } from "./contexts/SessionContext";
import logo from "./img/logo.png";
import shoppingcart from "./img/shopping-cart.png";
import profile from "./img/user.png";
import Home from '../src/Components/Pages/Home/Home';
import Login from '../src/Components/Pages/Login';
import Register from '../src/Components/Pages/Register';
import Promotions from './Pages/Promotions/Promotions';
import Products from './Pages/Products/Products';
import ProductDetail from './Pages/Products/ProductDetail';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.css";

const catagoryMenu = [
  {
      id: 1,
      name: "New",
      path: ""
  },
  {
      id: 2,
      name: "Sofas",
      path: ""
  },
  {
      id: 3,
      name: "Chairs",
      path: ""
  },
  {
      id: 4,
      name: "Table",
      path: ""
  },
  {
      id: 5,
      name: "Beds",
      path: ""
  },
  {
      id: 6,
      name: "Wardrobes",
      path: ""
  },
  {
      id: 7,
      name: "Drawer & Shelf",
      path: ""
  },
  {
      id: 8,
      name: "Lighting",
      path: ""
  },
  {
      id: 9,
      name: "Garden",
      path: ""
  },
  {
      id: 10,
      name: "Children's furniture",
      path: ""
  },
];

const useStyles = makeStyles((theme) => ({
  styleBar: {
    backgroundColor: "#F1EFFF",
  },
  button: {
    color: "#383F51",
    fontSize: "18px"
  },
  navLinkRight: {
    right: theme.spacing(5),
    position: "absolute",
  },
}));

function App() {
  const { user, logout: handleLogout } = useSession();
  const userBox = useMemo(() => {
    if (user) {
      return (
        <React.Fragment>
          {user?.type === "ADMIN" ? (
            <Button
              style={{ color: "#383F51" }}
              component={NavLink}
              type="button"
              activeStyle={{ borderBottom: "1px solid #3C4F76" }}
              to="/admin"
            >
              Admin
            </Button>
          ) : (
            <Button component={NavLink} to="/cart">
              <img src={shoppingcart} width="20vw" />
            </Button>
          )}

          <Button component={NavLink} to="/customer">
            <img src={profile} width="20vw" />
            {"  "}
            <span style={{ color: "#383F51", marginLeft: 10 }}>
              {user?.name}
            </span>
          </Button>

          <Button
            style={{ color: "#383F51" }}
            onClick={handleLogout}
            type="button"
          >
            Logout
          </Button>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Button
          component={NavLink}
          style={{ color: "#383F51", fontSize: "18px" }}
          activeStyle={{ borderBottom: "5px solid #3C4F76"}}
          to="/login"
        >
          Login
        </Button>
        <Button
          component={NavLink}
          style={{ color: "#383F51", fontSize: "18px" }}
          activeStyle={{ borderBottom: "5px solid #3C4F76"}}
          to="/register"
        >
          Register
        </Button>
      </React.Fragment>
    );
  }, [handleLogout, user]);

  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      {/* 
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
      */}
      <AppBar position="fixed" className={classes.styleBar}>
        <Toolbar>
          <div>
            <Button className={classes.button} component={NavLink} to="/" exact>
              <img src={logo} width="50vw" />
            </Button>
            <Button
              className={classes.button}
              component={NavLink}
              activeStyle={{ borderBottom: "5px solid #3C4F76" }}
              to="/"
              exact
            >
              Home
            </Button>
            <Button
              className={classes.button}
              component={NavLink}
              activeStyle={{ borderBottom: "5px solid #3C4F76" }}
              to="/product"
            >
              Product
            </Button>
              {/*<Button
              className={classes.button}
              component={NavLink}
              activeStyle={{ borderBottom: "1px solid #3C4F76" }}
              to="/promotion"
            >
              Promotion
            </Button> */}
          </div>
          <div className={classes.navLinkRight}>{userBox}</div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default App;
