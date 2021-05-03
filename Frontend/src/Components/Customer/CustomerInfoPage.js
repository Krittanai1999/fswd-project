import React, { useEffect } from "react";
import "../../styles/CustomerInfoStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image, Button, Row, Col, Table } from "react-bootstrap";
import WebFont from "webfontloader";
import Github from "../../img/github.png";
import { useSession } from "../../contexts/SessionContext";
import { NavLink, useLocation, matchPath, Link } from "react-router-dom";
import App from "../../App";

const CustomerInfoPage = () => {
  const { user } = useSession();
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "sans-serif"],
      },
    });
  }, []);
  if (user) {
    return (
      <div className="background">
        <App />
        <Container>
          <Row className="justify-content-md-center info-box">
            <Col xs lg="5" className="left-column">
              <div id="border-image">
                <Image
                  id="customer-picture"
                  src={Github}
                  height="200px"
                  width="200px"
                  roundedCircle
                />
              </div>
              <h2>{user.username}</h2>
            </Col>
            <Col xs lg="7" className="right-column">
              <h2>Infomation</h2>
              <br />
              <p>Full name : {user.name}</p>
              <p>Username : {user.username}</p>
              <p>Server_id : {user._id}</p>

              <br />
              <Button
                id="order-button"
                variant="default"
                style={{ color: "#EEEEEE", background: "#3C4F76", color: "white" }}
              ><Link to="cart/">YOUR ORDERS</Link>
                
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default CustomerInfoPage;
