import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
=======
import "../styles/AdminDashboard.css";
import {
  faHome,
  faArchive,
  faAd,
  faBoxes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
>>>>>>> 60a2b0d38e0ce1a5fffd98e729586ac15c748a63

import Sidebar from "../Sidebar/sidebar";

const AdminDashboard = () => {
  return (
    <>
      <div class="d-flex" id="wrapper">
        <Sidebar />

        <div id="page-content-wrapper">
          <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <h2>DASHBOARD</h2>
          </nav>
<<<<<<< HEAD

=======
>>>>>>> 60a2b0d38e0ce1a5fffd98e729586ac15c748a63
          <div class="container p-4 m-4">
            <div class="row">
              <div class="col-5 radius">
                <h1>Total Sales</h1>
              </div>
              <div class="col-1"></div>
              <div class="col-5 radius">
                <h1>Total Revenue</h1>
              </div>
            </div>
            <div class="row m-4"></div>
            <div class="row">
              <div class="col-5 radius">
                <h1>Top 3 Categories</h1>
                <p>0</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </div>
              <div class="col-1"></div>
              <div class="col-5 radius">
                <h1>Total Brand</h1>
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
export default AdminDashboard;
