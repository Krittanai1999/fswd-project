import React, {useEffect} from 'react';
import '../../styles/CustomerOrderStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Image, Button, Row, Col, Table} from 'react-bootstrap'
import WebFont from 'webfontloader';

import { Link } from 'react-router-dom';

const CustomerOrdersPage = () => {
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Roboto', 'sans-serif']
          }
        });
    }, []);
    return (
        <div className="background">
            <Container>
                <div id="header">
                    <h2>Orders</h2>
                    <h5>items</h5>
                    <h5>3</h5>
                </div>
                <div id="order-list">
                    
                    <div className="order-item">
                        <h6>Order number</h6>
                        <Link to="/customerOderDetail">
                            <Button id="order-button" variant="default" style={{color: "#EEEEEE", background: "#3C4F76"}}>YOUR ORDERS</Button>
                        </Link>
                    </div>
                    
                    <div className="order-item">
                        <h6>Order number</h6>

                    </div>
                    <div className="order-item">
                        <h6>Order number</h6>

                    </div>
                    <div className="order-item">
                        <h6>Order number</h6>

                    </div>
                    <div className="order-item">
                        <h6>Order number</h6>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CustomerOrdersPage;