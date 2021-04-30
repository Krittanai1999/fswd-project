import React from "react";
import { Link } from "react-router-dom";
import {
    Badge,
    Carousel,
    Col,
    Container,
    Row
} from 'react-bootstrap';

// icon
import {
    IoIosArrowBack,
    IoIosArrowForward
} from 'react-icons/io';
import {
    RiArrowRightLine
} from 'react-icons/ri';

import Footer from '../../Components/Footer/Footer';

import './Home.css';

import ex_img from '../../img/product-ex.png';

const exProduct = [
    {
        name: "Product name",
        img: ex_img,
        price: 12345,
        discount: 0.15
    },
    {
        name: "Product name",
        img: ex_img,
        price: 12345,
        discount: 0.15
    },
    {
        name: "Product name",
        img: ex_img,
        price: 12345,
        discount: 0.15
    },
    {
        name: "Product name",
        img: ex_img,
        price: 12345,
        discount: 0.15
    },
    {
        name: "Product name",
        img: ex_img,
        price: 12345,
        discount: 0.15
    },
    {
        name: "Product name",
        img: ex_img,
        price: 12345,
        discount: 0.15
    },
    {
        name: "Product name",
        img: ex_img,
        price: 12345,
        discount: 0.15
    },
    {
        name: "Product name",
        img: ex_img,
        price: 12345,
        discount: 0.15
    },
];

const commaNumber = require('comma-number');

const Home = () => {
    const slidePrev = (id) => {
        document.getElementById(id).scrollLeft -= 500;
    }

    const slideNext = (id) => {
        document.getElementById(id).scrollLeft += 500;
    }

    return (
        <div className="page-home">
            {/* Banner */}
            <Carousel className="home-promo">
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/800/400?text=First slide&bg=373940"
                        alt="First Banner"
                    />
                    <Carousel.Caption className="home-banner-caption">
                        <h3>First Banner</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/800/400?text=Second slide&bg=373940"
                        alt="Second Banner"
                    />
                    <Carousel.Caption className="home-banner-caption">
                        <h3>Second Banner</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/800/400?text=Third slide&bg=373940"
                        alt="Third Banner"
                    />
                    <Carousel.Caption className="home-banner-caption">
                        <h3>Third Banner</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Promotion */}

            <Container fluid className="home-promotion my-4 pt-1">
                {/* Head */}
                <Row className="home-promotion-small">
                    <Col xs={12} md={8} className="home-promotion-head pt-2">
                        <h5>
                            Promotion  <span style={{ color: "#ff0000", fontWeight: 600 }}>15% OFF!!</span>
                        </h5>
                    </Col>
                    <Col xs={12} md={4} className="home-discover home-pr">
                        <Link to="/" className="home-discover-box">
                            <h5>See more</h5>
                            <div className="discover-arrow">
                                <RiArrowRightLine />
                            </div>
                        </Link>
                    </Col>
                </Row>

                {/* Promotion product */}
                <div className="home-promotion-product">
                    <div className="home-promotion-banner">
                        <h5>Promotion</h5>
                        <h2>15% OFF!!</h2>
                        <Link to="/" className="home-discover-box">
                            <h5>See more</h5>
                            <div className="discover-arrow">
                                <RiArrowRightLine />
                            </div>
                        </Link>
                        <div className="slide-btn-box">
                            <button className="slide-btn" onClick={() => slidePrev('pr-slide')}>
                                <IoIosArrowBack />
                            </button>
                            <button className="slide-btn" onClick={() => slideNext('pr-slide')}>
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </div>
                    <div id="pr-slide" className="home-promotion-inner">
                        <div className="home-promotion-wrapper">
                            {exProduct.map(item => {
                                return (
                                    <div className="home-promotion-box">
                                        <div className="home-promotion-img">
                                            <img
                                                src={item.img}
                                                alt={item.name}
                                                width="100%"
                                            />
                                        </div>
                                        <div className="home-promotion-detail">
                                            <div className="home-promotion-name">
                                                <h5>{item.name}</h5>
                                            </div>
                                            <div className="home-promotion-price">
                                                <h5><span className="new-price">{commaNumber(item.price - (item.price * item.discount))}</span> <span className="old-price">{commaNumber(item.price)}</span> Bath</h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Container>


            {/* Lastest Product */}

            <Container fluid className="home-newest-product my-4 pt-4">
                {/* Head */}
                <Row>
                    <Col xs={12} sm={8} md={8} className="home-newest-product-head">
                        <h3>Lastest Products <Badge variant="danger">NEW!</Badge></h3>
                        <Link to="/" className="home-discover-box">
                            <h5>Discover more</h5>
                            <div className="discover-arrow">
                                <RiArrowRightLine />
                            </div>
                        </Link>
                    </Col>
                    <Col xs={12} sm={4} md={4} className="home-newest-product-btn">
                        <div className="slide-btn-box">
                            <button className="slide-btn" onClick={() => slidePrev('new-slide')}>
                                <IoIosArrowBack />
                            </button>
                            <button className="slide-btn" onClick={() => slideNext('new-slide')}>
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </Col>
                </Row>

                {/* Newest product */}
                <div className="home-newest-product">
                    <div id="new-slide" className="home-newest-inner">
                        {exProduct.map(item => {
                            return (
                                <div className="home-newest-box">
                                    <div className="home-newest-img">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            width="100%"
                                        />
                                    </div>
                                    <div className="home-newest-detail">
                                        <div className="home-newest-name">
                                            <h5>{item.name}</h5>
                                        </div>
                                        <div className="home-newest-price">
                                            <h5>{commaNumber(item.price)} Bath</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Container>

            <Footer />
        </div>

    )
};

export default Home;