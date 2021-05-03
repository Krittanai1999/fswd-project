import React from "react";
import logo from "./img/logo.png";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // NavLink
} from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from './Components/Navigation';

// import Home from './Components/Pages/Home/Home';
// import Login from './Components/Pages/Login';
// import Register from './Components/Pages/Register';
// import Promotions from './Components/Pages/Promotions/Promotions';
// import Products from './Components/Pages/Products/Products';
// import ProductDetail from './Components/Pages/Products/ProductDetail';

// import CustomerInfoPage from "./Components/Customer/CustomerInfoPage";
// import CustomerOrdersPage from "./Components/Customer/CustomerOrdersPage";
// import CustomerOrderDetailPage from "./Components/Customer/CustomerOrderDetailPage";

// import Cart from "./Components/Payments/Cart";
// import Checkout from "./Components/Payments/Checkout";
// import Payment from "./Components/Payments/Payment";

const catagoryMenu = [
  // BEDROOM, BATHROOM, KITCHEN, LIVINGROOM, OTHER
  {
    id: 1,
    name: "BEDROOM",
    path: "",
  },
  {
    id: 2,
    name: "BATHROOM",
    path: "",
  },
  {
    id: 3,
    name: "KITCHEN",
    path: "",
  },
  {
    id: 4,
    name: "LIVINGROOM",
    path: "",
  },
  {
    id: 5,
    name: "OTHER",
    path: "",
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

              <div className="search-box">
                <div className="search-field">
                  <input type="search" className="search-input" placeholder="Seach for products.." />
                </div>
              </div>

              <div className="header-icon-box">
                <Link to="/cart" title="shopping cart" className="header-shopping-cart-box">
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
                  <Link to={'/products/' + menu.path} className="catagory-menu">
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
                <Nav.Link href="/cart">Shopping cart</Nav.Link>
                <NavDropdown title="Catagory" id="basic-nav-dropdown">
                  {catagoryMenu.map((menu) => {
                    return (
                      <NavDropdown.Item href={'/products/' + menu.path}>{menu.name}</NavDropdown.Item>
                    )
                  })}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </nav>

        <Navigation />

        {/* <Switch>
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
                </Switch> */}
      </Router>
    </>
  );
}

export default App;

// // MAIN NAVBAR
// import React, { Fragment, useMemo } from "react";
// import { NavLink, useLocation, matchPath } from "react-router-dom";
// import { AppBar, Toolbar, Button, Avatar } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import { useSession } from "./contexts/SessionContext";
// import logo from "./img/logo.png";
// import shoppingcart from "./img/shopping-cart.png";
// import profile from "./img/user.png";
// import Home from '../src/Components/Pages/Home/Home';
// import Login from '../src/Components/Pages/Login';
// import Register from '../src/Components/Pages/Register';
// import Promotions from './Pages/Promotions/Promotions';
// import Products from './Pages/Products/Products';
// import ProductDetail from './Pages/Products/ProductDetail';

// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "swiper/swiper-bundle.css";

// const catagoryMenu = [
//   {
//       id: 1,
//       name: "New",
//       path: ""
//   },
//   {
//       id: 2,
//       name: "Sofas",
//       path: ""
//   },
//   {
//       id: 3,
//       name: "Chairs",
//       path: ""
//   },
//   {
//       id: 4,
//       name: "Table",
//       path: ""
//   },
//   {
//       id: 5,
//       name: "Beds",
//       path: ""
//   },
//   {
//       id: 6,
//       name: "Wardrobes",
//       path: ""
//   },
//   {
//       id: 7,
//       name: "Drawer & Shelf",
//       path: ""
//   },
//   {
//       id: 8,
//       name: "Lighting",
//       path: ""
//   },
//   {
//       id: 9,
//       name: "Garden",
//       path: ""
//   },
//   {
//       id: 10,
//       name: "Children's furniture",
//       path: ""
//   },
// ];

// const useStyles = makeStyles((theme) => ({
//   styleBar: {
//     backgroundColor: "#F1EFFF",
//   },
//   button: {
//     color: "#383F51",
//     fontSize: "18px"
//   },
//   navLinkRight: {
//     right: theme.spacing(5),
//     position: "absolute",
//   },
// }));

// function App() {
//   const { user, logout: handleLogout } = useSession();
//   const userBox = useMemo(() => {
//     if (user) {
//       return (
//         <React.Fragment>
//           {user?.type === "ADMIN" ? (
//             <Button
//               style={{ color: "#383F51" }}
//               component={NavLink}
//               type="button"
//               activeStyle={{ borderBottom: "1px solid #3C4F76" }}
//               to="/admin"
//             >
//               Admin
//             </Button>
//           ) : (
//             <Button component={NavLink} to="/cart">
//               <img src={shoppingcart} width="20vw" />
//             </Button>
//           )}

//           <Button component={NavLink} to="/customer">
//             <img src={profile} width="20vw" />
//             {"  "}
//             <span style={{ color: "#383F51", marginLeft: 10 }}>
//               {user?.name}
//             </span>
//           </Button>

//           <Button
//             style={{ color: "#383F51" }}
//             onClick={handleLogout}
//             type="button"
//           >
//             Logout
//           </Button>
//         </React.Fragment>
//       );
//     }
//     return (
//       <React.Fragment>
//         <Button
//           component={NavLink}
//           style={{ color: "#383F51", fontSize: "18px" }}
//           activeStyle={{ borderBottom: "5px solid #3C4F76"}}
//           to="/login"
//         >
//           Login
//         </Button>
//         <Button
//           component={NavLink}
//           style={{ color: "#383F51", fontSize: "18px" }}
//           activeStyle={{ borderBottom: "5px solid #3C4F76"}}
//           to="/register"
//         >
//           Register
//         </Button>
//       </React.Fragment>
//     );
//   }, [handleLogout, user]);

//   const classes = useStyles();
//   const location = useLocation();

//   return (
//     <>
//       {/*
//       <nav className="Navbar-nav">
//         <div className="header-top">
//           <div className="header-top-container">
//             <a href="/" className="logo-box">
//               <div className="logo-img">
//                 <img src={logo} alt="" height="100%" />
//               </div>
//             </a>

//             <div className="search-box">
//               <div className="search-field">
//                 <input
//                   type="search"
//                   className="search-input"
//                   placeholder="Seach for products.."
//                 />
//               </div>
//             </div>

//             <div className="header-icon-box">
//               <a
//                 href="/"
//                 title="shopping cart"
//                 className="header-shopping-cart-box"
//               >
//                 <img src={cart} alt="" height="100%" />
//               </a>
//               <div className="header-user-icon">
//                 <img src={user} alt="" height="90%" />
//               </div>
//               <div className="header-user-login">
//                 <a href="/login" className="user-list">
//                   <h5>Login</h5>
//                 </a>
//                 <span>|</span>
//                 <a href="/register" className="user-list">
//                   <h5>Register</h5>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="header-menu">
//           <ul className="header-menu-container">
//             <a href="/" className="catagory-menu">
//               <li>Living Room</li>
//             </a>
//             <a href="/" className="catagory-menu">
//               <li>Bathroom</li>
//             </a>
//             <a href="/" className="catagory-menu">
//               <li>Bedroom</li>
//             </a>
//             <a href="/" className="catagory-menu">
//               <li>Kitchen</li>
//             </a>
//             <a href="/" className="catagory-menu">
//               <li>Other</li>
//             </a>
//           </ul>
//         </div>
//       </nav>
//       */}
//       <AppBar position="fixed" className={classes.styleBar}>
//         <Toolbar>
//           <div>
//             <Button className={classes.button} component={NavLink} to="/" exact>
//               <img src={logo} width="50vw" />
//             </Button>
//             <Button
//               className={classes.button}
//               component={NavLink}
//               activeStyle={{ borderBottom: "5px solid #3C4F76" }}
//               to="/"
//               exact
//             >
//               Home
//             </Button>
//             <Button
//               className={classes.button}
//               component={NavLink}
//               activeStyle={{ borderBottom: "5px solid #3C4F76" }}
//               to="/product"
//             >
//               Product
//             </Button>
//               {/*<Button
//               className={classes.button}
//               component={NavLink}
//               activeStyle={{ borderBottom: "1px solid #3C4F76" }}
//               to="/promotion"
//             >
//               Promotion
//             </Button> */}
//           </div>
//           <div className={classes.navLinkRight}>{userBox}</div>
//         </Toolbar>
//       </AppBar>
//       <Toolbar />
//     </>
//   );
// }

// export default App;
