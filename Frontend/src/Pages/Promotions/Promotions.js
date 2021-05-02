import React from "react";
import { Link } from "react-router-dom";
import {
    Breadcrumb,
    Col,
    Container,
    Row
} from 'react-bootstrap';

import Footer from '../../Components/Footer/Footer';

// icon

// CSS
import './Promotions.css';

// img
import ex_img from '../../img/product-ex.png';

import exProduct from '../exProduct.json';

const commaNumber = require('comma-number');

const Promotions = () => {
    return (
        <div className="promotion-page">

            {/* Breadcrumb */}
            <Breadcrumb className="menu_breadcrumb">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Promotion</Breadcrumb.Item>
            </Breadcrumb>

            <div className="promotion-header">All Promotion</div>

            <Container fluid style={{ paddingBottom: '2vmin' }}>
                <Row>
                    {exProduct.map(item => {
                        return (
                            <Col xs={6} sm={4} md={3} style={{ padding: '2vmin' }}>
                                <Link to={"/products/" + item.productSlug} className="promotion-box">
                                    <div className="promotion-img">
                                        <img
                                            src={ex_img}
                                            alt={item.name}
                                            width="100%"
                                        />
                                    </div>
                                    <div className="promotion-detail">
                                        <div className="promotion-name">
                                            <h3>{item.name}</h3>
                                        </div>
                                        <div className="promotion-price">
                                            <h5><span className="new-price">{commaNumber(item.price - (item.price * item.discount))}</span> <span className="old-price">{commaNumber(item.price)}</span> THB</h5>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        )
                    })}
                </Row>
            </Container>

            <Footer />
        </div>
    )
};

export default Promotions;
