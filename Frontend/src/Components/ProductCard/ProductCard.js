import React from "react";
import { Link } from "react-router-dom";
import { Col, Card, Row } from "react-bootstrap";

// CSS
// import '../component.css';

// img
import ex_img from "../../img/product-ex.png";

const commaNumber = require('comma-number');

const Cards = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

    return (
        <Row>
            {posts.map(post => (
                <Col xs={6} md={3}>
                    <Link
                        to={"/products/" + post.title.replace(/\s/g, '_')}
                        className="product-card-box"
                    >
                        <Card className="product-card">
                            <Card.Img variant="top" src={ex_img} />
                            <Card.Body>
                                <Card.Title className="product-card-title">{post.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted product-card-price">
                                    {commaNumber(12345)} THB
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    )
};

export default Cards;