import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../Sidebar/sidebar";
import { Link } from "react-router-dom";

const AdminProducts = () => {
  return (
    <>
      <div class="d-flex" id="wrapper">
        <Sidebar />

        <div id="page-content-wrapper">
          <nav class="navbar navbar-expand navbar-light bg-light">
            <h2>PRODUCTS</h2>
          </nav>

          <div class="container m-2">
            <div class="row">
              <div class="col-2">
                <Link to="/admin/products/create" exact={true}>
                  <button class="btn btn-success">Create Product</button>
                </Link>
              </div>
              <div class="col-2">
                <Link to="/admin/products/:productId" exact={true}>
                  <button class="btn btn-success">Update Product</button>
                </Link>
              </div>
            </div>
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
export default AdminProducts;
