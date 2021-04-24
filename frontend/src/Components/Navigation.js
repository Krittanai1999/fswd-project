import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminDashboard from "./AdminDashboard";
import AdminProducts from "./Products/AdminProducts";
import AdminCreateProducts from "./Products/AdminCreateProducts";
import AdminUpdateProducts from "./Products/AdminUpdateProducts";
import AdminPromotion from "./Promotions/AdminPromotion";
import AdminCreatePromotion from "./Promotions/AdminCreatePromotion";
import AdminUpdatePromotion from "./Promotions/AdminUpdatePromotion";
import AdminOrders from "./Orders/AdminOrders";
import AdminOrdersDetail from "./Orders/AdminOrderDetail";
import Home from "./Home/Home";
import Login from "./Login";
import Register from "./Register";
import { Route, Switch } from "react-router-dom";

const Navigation = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/admin" exact={true} component={AdminDashboard} />
        <Route path="/register" exact={true} component={Register} />
        <Route path="/admin" exact={true} component={AdminDashboard} />
        <Route path="/admin/products" exact={true} component={AdminProducts} />
        <Route
          path="/admin/products/create"
          exact={true}
          component={AdminCreateProducts}
        />
        <Route
          path="/admin/products/:productID"
          exact={true}
          component={AdminUpdateProducts}
        />
        <Route
          path="/admin/promotions"
          exact={true}
          component={AdminPromotion}
        />
        <Route
          path="/admin/promotion/create"
          exact={true}
          component={AdminCreatePromotion}
        />
        <Route
          path="/admin/promotion/:promotionId"
          exact={true}
          component={AdminUpdatePromotion}
        />
        <Route path="/admin/orders" exact={true} component={AdminOrders} />
        <Route
          path="/admin/order/:orderId"
          exact={true}
          component={AdminOrdersDetail}
        />
      </Switch>
    </React.Fragment>
  );
};
export default Navigation;
