import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../Sidebar/sidebar";
import { Link } from "react-router-dom";

const AdminOrders = () => {
  return (
    <>
      <div class="d-flex" id="wrapper">
        <Sidebar />

        <div id="page-content-wrapper">
          <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <h2>ORDERS</h2>
          </nav>
          <div class="container m-2">
            <Link to="/admin/order/:orderId" exact={true}>
              <button class="btn btn-success">Order Detail</button>
            </Link>
          </div>
          <div class="container-fluid">
            <p>
              _________________________________________________________________
              _________________________________________________________________
              _________________________________________________________________
              ____________________________________
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminOrders;
