import React from "react";
import logo from './img/logo.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import {
    FaRegUser
} from 'react-icons/fa';
import {
    IoCartOutline
} from 'react-icons/io5';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'swiper/swiper-bundle.css';

import Home from './Components/Home/Home';
import Login from './Components/Login';
import Register from './Components/Register';

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

function App() {
    return (
        <>
            <Router>
                <nav className="Navbar-nav">
                    <div className="header-top">
                        <div className="header-top-container">
                            <div className="logo-box">
                                <Link to="/" className="logo-img">
                                    <img src={logo} alt="" height="100%" />
                                </Link>
                            </div>

                            <div className="search-box">
                                <div className="search-field">
                                    <input type="search" className="search-input" placeholder="Seach for products.." />
                                </div>
                            </div>

                            <div className="header-icon-box">
                                <Link to="/" title="shopping cart" className="header-shopping-cart-box">
                                    <IoCartOutline />
                                </Link>
                                <div className="header-user-icon">
                                    <FaRegUser />
                                </div>
                                <div className="header-user-login">
                                    <Link to="/login" className="user-list">
                                        <h5>Login</h5>
                                    </Link>
                                    <span>|</span>
                                    <Link to="/register" className="user-list">
                                        <h5>Register</h5>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header-menu">
                        <ul className="header-menu-container">
                            {catagoryMenu.map(menu => {
                                return (
                                    <Link to={'/' + menu.path} className="catagory-menu">
                                        <li>{menu.name}</li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>
                </nav>

                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>

            </Router>
        </>
    );
}

export default App;
