import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../Sidebar/sidebar";
import { Link } from "react-router-dom";

const AdminPromotion = () => {
  return (
    <>
      <div class="d-flex" id="wrapper">
        <Sidebar />

        <div id="page-content-wrapper">
          <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <h2>PROMOTION</h2>
          </nav>
          <div class="container m-2">
            <div class="row">
              <div class="col-2">
                <Link to="/admin/promotion/create" exact={true}>
                  <button class="btn btn-success">Create Promotions</button>
                </Link>
              </div>
              <div class="col-2">
                <Link to="/admin/promotion/:promotionId" exact={true}>
                  <button class="btn btn-success">Update Promotions</button>
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
export default AdminPromotion;
