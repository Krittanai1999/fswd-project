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
import { 
    IoIosArrowBack,
    IoIosArrowForward
} from 'react-icons/io';

import Footer from '../Footer/Footer';

import './Home.css';

import arrow from '../../img/right-arrow.png';
import ex_img from '../../img/product-ex.png';

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
            {/* Promotion */}
            <Carousel className="home-promo">
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/800/400?text=First slide&bg=373940"
                        alt="First Promotion"
                    />
                    <Carousel.Caption className="home-promotion-caption">
                        <h3>First promotion</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/800/400?text=Second slide&bg=373940"
                        alt="Second Promotion"
                    />
                    <Carousel.Caption className="home-promotion-caption">
                        <h3>Second promotion</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/800/400?text=Third slide&bg=373940"
                        alt="Third Promotion"
                    />
                    <Carousel.Caption className="home-promotion-caption">
                        <h3>Third promotion</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Banner */}
            <div className="home-banner">
                <div className="home-banner-box">
                    Banner
                </div>
            </div>

            {/* Lastest Product */}
            <Container fluid className="home-lastest-product">
                {/* Head */}
                <Row>
                    <Col xs={6} md={8} className="home-lastest-product-head">
                        <h3>Lastest Products</h3>
                    </Col>
                    <Col xs={12} md={4} className="home-discover">
                        <div className="home-discover-box">
                            <h5>Discover more</h5>
                            <div className="discover-arrow-img">
                                <img
                                    src={arrow}
                                    alt="right arrow"
                                    width="100%"
                                />
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* New product */}
                <div className="home-new-product">
                    <Swiper {...params} ref={swiperRef}>
                        <div className="home-new-product-slide">
                            <div className="home-new-product-box">
                                <div className="home-new-product-img">
                                    <img
                                        src={ex_img}
                                        alt="right arrow"
                                        width="100%"
                                    />
                                </div>
                                <div className="home-new-product-detail">
                                    <div className="home-new-product-name">
                                        <h5>Product Name</h5>
                                    </div>
                                    <div className="home-new-product-price">
                                        <h5>12,345 Bath</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="home-new-product-box">
                                <div className="home-new-product-img">
                                    <img
                                        src={ex_img}
                                        alt="right arrow"
                                        width="100%"
                                    />
                                </div>
                                <div className="home-new-product-detail">
                                    <div className="home-new-product-name">
                                        <h5>Product Name</h5>
                                    </div>
                                    <div className="home-new-product-price">
                                        <h5>12,345 Bath</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="home-new-product-box">
                                <div className="home-new-product-img">
                                    <img
                                        src={ex_img}
                                        alt="right arrow"
                                        width="100%"
                                    />
                                </div>
                                <div className="home-new-product-detail">
                                    <div className="home-new-product-name">
                                        <h5>Product Name</h5>
                                    </div>
                                    <div className="home-new-product-price">
                                        <h5>12,345 THB</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide-2">
                            <div className="home-new-product-slide">
                                <div className="home-new-product-box">
                                    <div className="home-new-product-img">
                                        <img
                                            src={ex_img}
                                            alt="right arrow"
                                            width="100%"
                                        />
                                    </div>
                                    <div className="home-new-product-detail">
                                        <div className="home-new-product-name">
                                            <h5>Product Name</h5>
                                        </div>
                                        <div className="home-new-product-price">
                                            <h5>12,345 Bath</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="home-new-product-box">
                                    <div className="home-new-product-img">
                                        <img
                                            src={ex_img}
                                            alt="right arrow"
                                            width="100%"
                                        />
                                    </div>
                                    <div className="home-new-product-detail">
                                        <div className="home-new-product-name">
                                            <h5>Product Name</h5>
                                        </div>
                                        <div className="home-new-product-price">
                                            <h5>12,345 Bath</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="home-new-product-box">
                                    <div className="home-new-product-img">
                                        <img
                                            src={ex_img}
                                            alt="right arrow"
                                            width="100%"
                                        />
                                    </div>
                                    <div className="home-new-product-detail">
                                        <div className="home-new-product-name">
                                            <h5>Product Name</h5>
                                        </div>
                                        <div className="home-new-product-price">
                                            <h5>12,345 THB</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
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