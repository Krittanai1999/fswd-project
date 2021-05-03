import React, {useEffect} from 'react';
import '../../styles/CustomerOrderStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Image, Button, Row, Col, Table} from 'react-bootstrap'
import WebFont from 'webfontloader';

import { Link } from 'react-router-dom';

const CustomerOrderDetailPage = () => {
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
                    <h2>Order Detail</h2>
                </div>
                <h5>Order Status</h5>
                <div id="order-status">
                    <p>shipping status : incompleted</p>
                    <p>start date : 3/04/2021</p>
                    <p>finished date: -</p>
                </div>
                <h5>Order items list</h5>
                <div id="products-order-list">
                    
                        <div className="product-order">
                            <h6>Order number 1</h6>
                        </div>
                    
                    <div className="product-order">
                        <h6>Order number</h6>

                    </div>
                    <div className="product-order">
                        <h6>Order number</h6>

                    </div>
                    <div className="product-order">
                        <h6>Order number</h6>

                    </div>
                    <div className="product-order">
                        <h6>Order number</h6>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CustomerOrderDetailPage;