import React from "react";
import logo from './img/logo.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    // NavLink
} from "react-router-dom";
import {
    Nav,
    Navbar,
    NavDropdown
} from 'react-bootstrap';

import {
    FaRegUser
} from 'react-icons/fa';
import {
    IoCartOutline
} from 'react-icons/io5';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'swiper/swiper-bundle.css';

import Home from './Pages/Home/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Promotions from './Pages/Promotions/Promotions';
import Products from './Pages/Products/Products';
import ProductDetail from './Pages/Products/ProductDetail';

const catagoryMenu = [
    // BEDROOM, BATHROOM, KITCHEN, LIVINGROOM, OTHER
    {
        id: 1,
        name: "BEDROOM",
        path: ""
    },
    {
        id: 2,
        name: "BATHROOM",
        path: ""
    },
    {
        id: 3,
        name: "KITCHEN",
        path: ""
    },
    {
        id: 4,
        name: "LIVINGROOM",
        path: ""
    },
    {
        id: 5,
        name: "OTHER",
        path: ""
    },
];

function App() {

    return (
        <>
            <Router>
                <nav className="Navbar-nav">
                    {/* Nav >= 768 */}
                    <div className="header-top navWide">
                        <div className="header-top-container">
                            <div className="logo-box">
                                <Link to="/" className="logo-img">
                                    <img src={logo} alt="" height="100%" />
                                </Link>
                            </div>

                            {/* <div className="search-box">
                                <div className="search-field">
                                    <input type="search" className="search-input" placeholder="Seach for products.." />
                                </div>
                            </div> */}

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

                    <div className="header-menu navWide">
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

                    {/* Nav < 768 */}
                    <Navbar expand="lg" className="navNarrow">
                        <Navbar.Brand href="/" style={{ width: '40px', height: '40px' }}>
                            <img src={logo} alt="" height="100%" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/register">Register</Nav.Link>
                                <Nav.Link href="/">Shopping cart</Nav.Link>
                                <NavDropdown title="Catagory" id="basic-nav-dropdown">
                                    {catagoryMenu.map((menu, index) => {
                                        return (
                                            <NavDropdown.Item href={'/' + menu.path}>{menu.name}</NavDropdown.Item>
                                        )
                                    })}
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </nav>

                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/promotions">
                        <Promotions />
                    </Route>
                    <Route path="/products/:productSlug">
                        <ProductDetail />
                    </Route>
                    <Route path="/products">
                        <Products />
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
