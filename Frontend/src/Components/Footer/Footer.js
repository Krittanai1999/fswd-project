import React from "react"
import { Container, Row, Col } from 'react-bootstrap';

import './Footer.css'

import logo from '../../img/logo.png';
import profile from '../../img/profile-icon.png';

const Footer = () => {
    return (
        <footer className="page-footer">
            <Container fluid>
                <Row>
                    <Col sm={12} md={4}>

                        <div className="footer-group-box">

                            <div className="footer-group-img">
                                <img
                                    src={logo}
                                    alt="Third slide"
                                    width="30%"
                                />
                            </div>

                            <div className="footer-group-info">
                                <h3>OOO Co., Ltd.</h3>
                                <p>10th Thaniya Plaza Building 52 Silom Rd. Bangrak, Bangkok, Thailand 10500</p>
                            </div>

                        </div>
                    </Col>
                    <Col sm={12} md={8}>

                        <Container fluid className="footer-about">
                            <h3>About us</h3>
                            <Row>

                                <Col xs={6} sm={3} md={3} className="footer-about-card">
                                    <div className="footer-about-box">
                                        <div className="footer-about-img">
                                            <img
                                                src={profile}
                                                alt="profile"
                                                width="70%"
                                            />
                                        </div>
                                        <div className="footer-about-info">
                                            <h4>DDD</h4>
                                        </div>
                                    </div>
                                </Col>

                                <Col xs={6} sm={3} md={3} className="footer-about-card">
                                    <div className="footer-about-box">
                                        <div className="footer-about-img">
                                            <img
                                                src={profile}
                                                alt="profile"
                                                width="70%"
                                            />
                                        </div>
                                        <div className="footer-about-info">
                                            <h4>DDD</h4>
                                        </div>
                                    </div>
                                </Col>

                                <Col xs={6} sm={3} md={3} className="footer-about-card">
                                    <div className="footer-about-box">
                                        <div className="footer-about-img">
                                            <img
                                                src={profile}
                                                alt="profile"
                                                width="70%"
                                            />
                                        </div>
                                        <div className="footer-about-info">
                                            <h4>DDD</h4>
                                        </div>
                                    </div>
                                </Col>

                                <Col xs={6} sm={3} md={3} className="footer-about-card">
                                    <div className="footer-about-box">
                                        <div className="footer-about-img">
                                            <img
                                                src={profile}
                                                alt="profile"
                                                width="70%"
                                            />
                                        </div>
                                        <div className="footer-about-info">
                                            <h4>DDD</h4>
                                        </div>
                                    </div>
                                </Col>

                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;