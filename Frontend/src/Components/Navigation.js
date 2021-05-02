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

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import CustomerInfoPage from "./Customer/CustomerInfoPage";
// import ProductSlug from "./pages/ProductSlug";
import { Route, Switch } from "react-router-dom";

const Navigation = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/register" exact={true} component={Register} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/customer" exact={true} component={CustomerInfoPage} />
        {/* <Route path="/product/:slug" exact={true} component={ProductSlug} /> */}

        <Route path="/admin" exact={true} component={AdminDashboard} />
        <Route path="/admin/products" exact={true} component={AdminProducts} />
        <Route path="/admin/products/create" exact={true} component={AdminCreateProducts} />
        <Route path="/admin/products/:productID" exact={true} component={AdminUpdateProducts} />
        <Route path="/admin/promotions" exact={true} component={AdminPromotion} />
        <Route path="/admin/promotion/create" exact={true} component={AdminCreatePromotion} />
        <Route path="/admin/promotion/:promotionId" exact={true} component={AdminUpdatePromotion} />
        <Route path="/admin/orders" exact={true} component={AdminOrders} />
        <Route path="/admin/order/:orderId" exact={true} component={AdminOrdersDetail} />
      </Switch>
    </React.Fragment>
  );
};
export default Navigation;
