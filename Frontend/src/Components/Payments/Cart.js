import React, {useEffect, useState} from 'react';
import '../../styles/Cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Image, Button, Row, Col, Table} from 'react-bootstrap'
import WebFont from 'webfontloader';
import Github from "../../img/github.png";

import { PRODUCT_QUERY } from "../../graphql/productQuery";
import { ME_QUERY } from "../../graphql/meQuery";
import { useQuery } from "@apollo/client";

import {Link} from 'react-router-dom';

const Cart = () => {
    const { data } = useQuery(PRODUCT_QUERY);
    const { user } = useQuery(ME_QUERY);
    const [cartList, setCartList] = useState([["table","2 piece"],["chair", "2 piece"],["bed", "1 piece"]])
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
                            { cartList.map((list) => {
                                return(
                                    <div className="cart-list-cell slide-bck-bottom ">
                                        <h6>{list[0]}</h6>
                                        <p>{list[1]}</p>
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