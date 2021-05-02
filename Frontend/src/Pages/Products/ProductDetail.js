import React from "react";
import { Link } from "react-router-dom";
import {
    Card,
    Col,
    Container,
    Row
} from 'react-bootstrap';

import Footer from '../../Components/Footer/Footer';

// icon
import {
    IoCartOutline
} from 'react-icons/io5';
import {
    IoIosArrowBack,
    IoIosArrowForward
} from 'react-icons/io';

// CSS
import './Products.css';

// img
import ex_img from '../../img/product-ex.png';

import exProduct from '../exProduct.json';

const commaNumber = require('comma-number');

const ProductDetail = () => {
    const slidePrev = (id, size) => {
        document.getElementById(id).scrollLeft -= size;
    }

    const slideNext = (id, size) => {
        document.getElementById(id).scrollLeft += size;
    }

    return (
        <div className="product-detail-page">
            <Container fluid className="product-detail-box">
                <Row>
                    <Col xs={12} sm={6} md={6} className="product-detail-img">
                        <img
                            src={ex_img}
                            alt="product"
                            width="100%"
                        />
                    </Col>
                    <Col xs={12} sm={6} md={6} className="product-detail-data">
                        <div className="product-detail-info">
                            <div className="product-detail-name">
                                Product Name
                            </div>
                            <div className="product-detail-price">
                                <span>12,345</span> THB
                            </div>
                            <hr style={{ border: "1px solid #D1BEB0" }} />
                            <div className="product-detail-desc">
                                Product detail / Size: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nunc commodo pharetra libero in commodo. Suspendisse potenti.
                            </div>
                            {/* <div className="product-detail-color">
                                <h4>Color</h4>
                                <ul className="color-selected">
                                    <li className="color-tab"></li>
                                    <li className="color-tab"></li>
                                    <li className="color-tab"></li>
                                    <li className="color-tab"></li>
                                </ul>
                            </div> */}
                        </div>
                        <div className="product-detail-btn">
                            <button className="add-to-cast-btn">
                                <span> <IoCartOutline /> </span> Add to cart
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Other product */}
            <Container fluid className="home-newest-product mt-4 py-4">
                {/* Head */}
                <Row>
                    <Col xs={12} sm={8} md={8} className="home-newest-product-head">
                        <h3 style={{ fontSize: "4vmin" }}>Customers also viewed</h3>
                    </Col>
                    <Col xs={12} sm={4} md={4} className="home-newest-product-btn">
                        <div className="slide-btn-box">
                            <button className="slide-btn" onClick={() => slidePrev('new-slide', 700)}>
                                <IoIosArrowBack />
                            </button>
                            <button className="slide-btn" onClick={() => slideNext('new-slide', 700)}>
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </Col>
                </Row>

                {/* Newest product */}
                <div className="product-detail-product">
                    <div id="new-slide" className="product-detail-inner">
                        {exProduct.map(item => {
                            return (
                                <Link
                                    to={"/products/" + item.productSlug}
                                    className="product-box"
                                >
                                    <Card className="product-card">
                                        <Card.Img variant="top" src={ex_img} />
                                        <Card.Body>
                                            <Card.Title className="product-card-title">{item.name}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted product-card-price">
                                                {commaNumber(item.price)} THB
                                            </Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </Container>

            <Footer />
        </div>
    )
};

export default ProductDetail;
