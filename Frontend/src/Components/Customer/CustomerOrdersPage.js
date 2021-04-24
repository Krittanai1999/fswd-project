import React, {useEffect} from 'react';
import '../../styles/CustomerOrderStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Image, Button, Row, Col, Table} from 'react-bootstrap'
import WebFont from 'webfontloader';

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