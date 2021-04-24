import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebar.css";
import "../styles/Admin.css";
import {
  faHome,
  faArchive,
  faAd,
  faBoxes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <>
      <div class="bg-blue border-right" id="sidebar-wrapper">
        <div class="sidebar-heading">Admin</div>
        <div class="sidenav list-group list-group-flush">
          <a
            href="/admin"
            class="list-group-item list-group-item-action bg-blue"
          >
            <FontAwesomeIcon icon={faHome} /> Dashboard
          </a>
          <a
            href="/admin/products"
            class="list-group-item list-group-item-action bg-blue"
          >
            <FontAwesomeIcon icon={faArchive} /> Product
          </a>
          <a
            href="/admin/promotions"
            class="list-group-item list-group-item-action bg-blue"
          >
            <FontAwesomeIcon icon={faAd} /> Promotion
          </a>
          <a
            href="/admin/orders"
            class="list-group-item list-group-item-action bg-blue"
          >
            <FontAwesomeIcon icon={faBoxes} /> Order
          </a>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
