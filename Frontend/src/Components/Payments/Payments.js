import React, {useEffect, useState} from 'react';
import '../../styles/Payment.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Image, Button, Row, Col, Table, Form} from 'react-bootstrap'
import WebFont from 'webfontloader';
import Github from "../../img/github.png";

import {Link} from 'react-router-dom';

const Payment = () => {
    const [cartList, setCartList] = useState([1,1,1,1,1,1])
    const [countItem, setCountItem] = useState(cartList.length)
    const [cardSelect, setCardSelect] = useState(0)

    const selectedCardHandle = (select) => {
        return select ? "payment-card":"tab-select-payment"
    }
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
                <h2>Payment</h2>
                    <Row>
                        <Col lg="7">
                            <div className={selectedCardHandle(cardSelect == 0)} onClick={() => setCardSelect(0)}></div>
                            <div className={selectedCardHandle(cardSelect == 1)} onClick={() => setCardSelect(1)}></div>
                            <div className={selectedCardHandle(cardSelect == 2)} onClick={() => setCardSelect(2)}></div>
                        </Col >
                        <Col lg="5" style={{padding: "2%"}}>
                            <Link to="/checkout">
                                <Button id="checkoutBtn" variant="default" >SELECT YOUR PAYMENT</Button>
                            </Link>
                        </Col>
                    </Row>
                
            </Container>
        </div>
    )
}

export default Payment;