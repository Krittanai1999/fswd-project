import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AdminDashboard from "./Admin/AdminDashboard";
import AdminProducts from "./Admin/Products/AdminProducts";
import AdminCreateProducts from "./Admin/Products/AdminCreateProducts";
import AdminUpdateProducts from "./Admin/Products/AdminUpdateProducts";
import AdminPromotion from "./Admin/Promotions/AdminPromotion";
import AdminCreatePromotion from "./Admin/Promotions/AdminCreatePromotion";
import AdminUpdatePromotion from "./Admin/Promotions/AdminUpdatePromotion";
import AdminOrders from "./Admin/Orders/AdminOrders";
import AdminOrdersDetail from "./Admin/Orders/AdminOrderDetail";

import Home from "./Home/Home";
import Login from "./Login";
import Register from "./Register";
import CustomerInfoPage from "./Customer/CustomerInfoPage";
import ProductSlug from "./pages/ProductSlug";
import Product from "./pages/Products/Products";
import Promotion from "./pages/Promotion/promotion"

import Cart from "./Payments/Cart";
import Checkout from "./Payments/Checkout";
import Payment from "./Payments/Payments";

import { Route, Switch } from "react-router-dom";

const Navigation = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/register" exact={true} component={Register} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/customer" exact={true} component={CustomerInfoPage} />
        <Route path="/product/:slug" exact={true} component={ProductSlug} />
        <Route path="/products/" exact={true} component={Product} />
        <Route path="/promotion/" exact={true} component={Promotion} />

        <Route path="/admin" exact={true} component={AdminDashboard} />
        <Route path="/admin/products" exact={true} component={AdminProducts} />
        <Route path="/admin/products/create" exact={true} component={AdminCreateProducts} />
        <Route path="/admin/products/:_id" exact={true} component={AdminUpdateProducts} />
        <Route path="/admin/promotions" exact={true} component={AdminPromotion} />
        <Route path="/admin/promotion/create" exact={true} component={AdminCreatePromotion} />
        <Route path="/admin/promotion/_id" exact={true} component={AdminUpdatePromotion} />
        <Route path="/admin/orders" exact={true} component={AdminOrders} />
        <Route path="/admin/order/_id" exact={true} component={AdminOrdersDetail} />
        <Route path="/cart" exact={true} component={Cart} />
        
        

        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
      </Switch>
    </React.Fragment>
  );
};
export default Navigation;
