import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@material-ui/core";
import Swiper from "react-id-swiper";

import Footer from "../Footer/Footer";

import "./Home.css";

import arrow from "../../img/right-arrow.png";
import prev from "../../img/previous-arrow.png";
import next from "../../img/next-arrow.png";
import App from "../../App";
import { PRODUCT_QUERY } from "../../graphql/productQuery";
import { useQuery } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  root2: {
    maxWidth: 350,
    borderRadius: 0,
  },
  media: {
    height: 500,
  },
  paper1: {
    padding: theme.spacing(2),
    backgroundColor: "#e0dfec",
  },
}));

const Home = () => {
  const { data } = useQuery(PRODUCT_QUERY);
  const classes = useStyles();
  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  };

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

  const productItem = () => {
    return data?.products?.map((product) => (
      <Grid item xs={3}>
        <Card className={classes.root2}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={product.imageUrl}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="p">
                {product.name}
              </Typography>
              <Typography style={{ color: "green", fontSize: 19 }}>
                {parseInt(product.price).toLocaleString("th-TH", {
                  style: "currency",
                  currency: "THB",
                }) ?? ""}
              </Typography>
              <Typography
                variant="body2"
                color="textPrimary"
                component="p"
                noWrap={true}
              >
                {product.description}
              </Typography>
              {/* <Typography variant="body2" color="textSecondary" component="p">
                 Tags:{product.tag[0]}
              </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ));
  };

  return (
    <div className="page-home">
      <App />
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
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Banner */}
      <div className="home-banner">
        <div className="home-banner-box">Banner</div>
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
                <img src={arrow} alt="right arrow" width="100%" />
              </div>
            </div>
          </Col>
        </Row>

        {/* New product */}
        <div className="home-new-product">
          <Swiper {...params} ref={swiperRef}>
            {productItem()}
          </Swiper>
        </div>

        {/* Button */}
        <Row>
          <Col xs sm={12} className="home-lastest-product-arrow">
            <Button variant="light" onClick={goPrev}>
              <img src={prev} width="40vmin" />
            </Button>
            <Button variant="light" onClick={goNext}>
              <img src={next} width="40vmin" />
            </Button>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Home;
