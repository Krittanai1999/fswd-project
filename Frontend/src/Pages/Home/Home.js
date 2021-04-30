import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Carousel,
    Col,
    Container,
    Row
} from 'react-bootstrap';
import Swiper from 'react-id-swiper';

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
        price: 12345
    },
    {
        name: "Product name",
        img: ex_img,
        price: 12345
    },
    {
        name: "Product name",
        img: ex_img,
        price: 12345
    },
    {
        name: "Product name",
        img: ex_img,
        price: 12345
    },
    {
        name: "Product name",
        img: ex_img,
        price: 12345
    },
    {
        name: "Product name",
        img: ex_img,
        price: 12345
    },
    {
        name: "Product name",
        img: ex_img,
        price: 12345
    },
    {
        name: "Product name",
        img: ex_img,
        price: 12345
    },
];

const commaNumber = require('comma-number');

const Home = () => {
    const params = {
        pagination: {
            el: '.swiper-pagination',
            type: "bullets",
            clickable: true
        },
    }

    const swiperRef = useRef(null);
    const [currentIndex, updateCurrentIndex] = useState(0);

    // Manipulate swiper from outside
    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const updateIndex = useCallback(
        () => updateCurrentIndex(swiperRef.current.swiper.realIndex),
        []
    );

    // Add eventlisteners for swiper after initializing
    useEffect(() => {
        const swiperInstance = swiperRef.current.swiper;

        if (swiperInstance) {
            swiperInstance.on("slideChange", updateIndex);
        }

        return () => {
            if (swiperInstance) {
                swiperInstance.off("slideChange", updateIndex);
            }
        };
    }, [updateIndex]);

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
                        <h5>Promotion <span style={{ color: "#ff0000" }}>15% OFF</span></h5>
                    </Col>
                    <Col xs={12} md={4} className="home-discover home-pr">
                        <Link to="/" className="home-discover-box">
                            <h5>Discover more</h5>
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
                        <h2>15% OFF</h2>
                        <Link to="/" className="home-discover-box">
                            <h5>Discover more</h5>
                            <div className="discover-arrow">
                                <RiArrowRightLine />
                            </div>
                        </Link>
                        <div className="slide-btn-box">
                            <button className="slide-btn">
                                <IoIosArrowBack />
                            </button>
                            <button className="slide-btn">
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </div>
                    <div className="home-promotion-inner">
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
                                                <h5>{commaNumber(item.price)} Bath</h5>
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
            <Container fluid className="home-lastest-product">
                {/* Head */}
                <Row>
                    <Col xs={12} sm={6} md={8} className="home-lastest-product-head">
                        <h3>Lastest Products</h3>
                    </Col>
                    <Col xs={12} sm={6} md={4} className="home-discover">
                        <Link to="/" className="home-discover-box">
                            <h5>Discover more</h5>
                            <div className="discover-arrow">
                                <RiArrowRightLine />
                            </div>
                        </Link>
                    </Col>
                </Row>

                {/* New product */}
                <div className="home-new-product">
                    <Swiper {...params} ref={swiperRef}>
                        <div className="home-new-product-slide">
                            {exProduct.map((item, index) => {
                                if (index < 4) {
                                    return (
                                        <div className="home-new-product-box">
                                            <div className="home-new-product-img">
                                                <img
                                                    src={item.img}
                                                    alt={item.name}
                                                    width="100%"
                                                />
                                            </div>
                                            <div className="home-new-product-detail">
                                                <div className="home-new-product-name">
                                                    <h5>{item.name}</h5>
                                                </div>
                                                <div className="home-new-product-price">
                                                    <h5>{commaNumber(item.price)} Bath</h5>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                        <div className="home-new-product-slide">
                            {exProduct.map((item, index) => {
                                if (index >= 4 && index < 8) {
                                    return (
                                        <div className="home-new-product-box">
                                            <div className="home-new-product-img">
                                                <img
                                                    src={item.img}
                                                    alt={item.name}
                                                    width="100%"
                                                />
                                            </div>
                                            <div className="home-new-product-detail">
                                                <div className="home-new-product-name">
                                                    <h5>{item.name}</h5>
                                                </div>
                                                <div className="home-new-product-price">
                                                    <h5>{commaNumber(item.price)} Bath</h5>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }

                            })}
                        </div>
                    </Swiper>
                </div>

                {/* Button */}
                <Row>
                    <Col xs sm={12} className="home-lastest-product-arrow">
                        <Button variant="light" onClick={goPrev}>
                            <IoIosArrowBack />
                        </Button>
                        <Button variant="light" onClick={goNext}>
                            <IoIosArrowForward />
                        </Button>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>

    )
};

export default Home;