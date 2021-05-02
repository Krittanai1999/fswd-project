import React, {useEffect, useState} from 'react';
import '../../styles/Cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Image, Button, Row, Col, Table} from 'react-bootstrap'
import WebFont from 'webfontloader';
import Github from "../../img/github.png";

import {Link} from 'react-router-dom';

const Cart = () => {
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
        <div className="background">
            <Container>
                <Row className="">
                    <Col xs lg="8" className="">
                        <div id="header">
                            <h2>Cart</h2>
                            <p>{countItem} items</p>
                        </div>
                        <hr className="underline"></hr>
                        <div id="cart-order-list" className="scale-up-ver-top">
                            {cartList.map((list) => {
                                return(
                                    <div className="cart-list-cell slide-bck-bottom ">
                                        <h6>Order number 1</h6>
                                    </div>
                                )
                            })}
                        </div>
                    </Col>
                    <Col xs lg="4" className="">
                        <div id="cart-summary" className="slide-bck-top">
                            <h3>Order Summary</h3>
                            <hr className="underline"></hr>
                            <div id="summaryContent">

                            </div>
                            <hr className="underline"></hr>
                            <div id="totalCost">
                                <h6>TOTAL COST</h6>
                                <p>1000</p>
                            </div>
                            <Link to="/checkout">
                                <Button id="checkoutBtn" variant="default">CHECKOUT</Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cart;