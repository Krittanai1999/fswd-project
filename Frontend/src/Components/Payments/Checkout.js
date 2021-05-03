import React, {useEffect, useState} from 'react';
import '../../styles/Checkout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Image, Button, Row, Col, Table, Form} from 'react-bootstrap'
import WebFont from 'webfontloader';
import Github from "../../img/github.png";

import {Link} from 'react-router-dom';

const Checkout = () => {
    const [cartList, setCartList] = useState([1,1,1,1,1,1])
    const [countItem, setCountItem] = useState(cartList.length)

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Roboto', 'sans-serif']
          }
        });
    }, []);
    return(
        <div className="background" style={{padding:'2%'}}>
            <Container className="contain-box" fluid>
                <h2>Delivery Contact</h2>
                <Form>
                    <Row>
                        <Col lg="4">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="password" placeholder="firstname" />
                    </Form.Group>
                    </Col>
                    <Col lg="4">
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="password" placeholder="lastname" />
                    </Form.Group>
                    </Col>
                    <Col lg="4">
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="password" placeholder="xxx-xxx-xxxx" />
                    </Form.Group>
                    </Col>
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                    <Col lg="8">
                    <Form.Group controlId="formBasicPassword" >
                        <Form.Label>Email Address</Form.Label>
                    <Form.Control type="password" placeholder="xxx@gmail.com" />
                    </Form.Group>
                    </Col >
                    {/* <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button> */}
                    
                    </Row>
                    <h2>Delivery Address</h2>
                    <Row>
                        <Col lg="12">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="password" placeholder="firstname" />
                    </Form.Group>
                    </Col>
                    <Col lg="10">
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="password" placeholder="lastname" />
                    </Form.Group>
                    </Col>
                    <Col lg="4">
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Post Code</Form.Label>
                        <Form.Control type="password" placeholder="xxx-xxx-xxxx" />
                    </Form.Group>
                    </Col>
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                    <Col lg="5">
                    <Form.Group controlId="formBasicPassword" >
                        <Form.Label>Country</Form.Label>
                    <Form.Control as="select" placeholder="xxx@gmail.com" />
                    </Form.Group>
                    </Col >
                    {/* <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button> */}
                    <Col style={{padding: "2%"}}>
                        <Link to="/payment">
                            <Button id="checkoutBtn" variant="default" >SELECT YOUR PAYMENT</Button>
                        </Link>
                    </Col>
                    </Row>
                </Form>
                
            </Container>
        </div>
    )
}

export default Checkout;