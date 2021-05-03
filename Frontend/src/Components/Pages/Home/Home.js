// import React, { useState, useEffect, useCallback, useRef } from "react";
// import { Link } from "react-router-dom";
// import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
// import {
//   Card,
//   CardActionArea,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Typography,
//   Grid,
// } from "@material-ui/core";
// import Swiper from "react-id-swiper";

// import Footer from "../Footer/Footer";

// import "./Home.css";

// import arrow from "../../img/right-arrow.png";
// import prev from "../../img/previous-arrow.png";
// import next from "../../img/next-arrow.png";
// import App from "../../App";
// import { PRODUCT_QUERY } from "../../graphql/productQuery";
// import { useQuery } from "@apollo/client";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
//   root2: {
//     maxWidth: 350,
//     borderRadius: 0,
//   },
//   media: {
//     height: 500,
//   },
//   paper1: {
//     padding: theme.spacing(2),
//     backgroundColor: "#e0dfec",
//   },
// }));

// const Home = () => {
//   const { data } = useQuery(PRODUCT_QUERY);
//   const classes = useStyles();
//   const params = {
//     pagination: {
//       el: ".swiper-pagination",
//       type: "bullets",
//       clickable: true,
//     },
//   };

//   const swiperRef = useRef(null);
//   const [currentIndex, updateCurrentIndex] = useState(0);

//   // Manipulate swiper from outside
//   const goNext = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slideNext();
//     }
//   };

//   const goPrev = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slidePrev();
//     }
//   };

//   const updateIndex = useCallback(
//     () => updateCurrentIndex(swiperRef.current.swiper.realIndex),
//     []
//   );

//   // // Add eventlisteners for swiper after initializing
//   // useEffect(() => {
//   //   const swiperInstance = swiperRef.current.swiper;

//   //   if (swiperInstance) {
//   //     swiperInstance.on("slideChange", updateIndex);
//   //   }

//   //   return () => {
//   //     if (swiperInstance) {
//   //       swiperInstance.off("slideChange", updateIndex);
//   //     }
//   //   };
//   // }, [updateIndex]);

//   const productItem = () => {
//     return data?.products?.map((product) => (
//       <Grid item xs={3}>
//         <Card className={classes.root2}>
//           <CardActionArea>
//             <CardMedia
//               className={classes.media}
//               image={product.imageUrl}
//               title="Contemplative Reptile"
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h6" component="p">
//                 {product.name}
//               </Typography>
//               <Typography style={{ color: "green", fontSize: 19 }}>
//                 {parseInt(product.price).toLocaleString("th-TH", {
//                   style: "currency",
//                   currency: "THB",
//                 }) ?? ""}
//               </Typography>
//               <Typography
//                 variant="body2"
//                 color="textPrimary"
//                 component="p"
//                 noWrap={true}
//               >
//                 {product.description}
//               </Typography>
//               {/* <Typography variant="body2" color="textSecondary" component="p">
//                  Tags:{product.tag[0]}
//               </Typography> */}
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       </Grid>
//     ));
//   };

//   return (
//     <div className="page-home">
//       <App />
//       {/* Promotion */}
//       <Carousel className="home-promo">
//         <Carousel.Item interval={2000}>
//           <img
//             className="d-block w-100"
//             src="https://picsum.photos/800/400?text=First slide&bg=373940"
//             alt="First Promotion"
//           />
//           <Carousel.Caption className="home-promotion-caption">
//             <h3>First promotion</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item interval={2000}>
//           <img
//             className="d-block w-100"
//             src="https://picsum.photos/800/400?text=Second slide&bg=373940"
//             alt="Second Promotion"
//           />
//           <Carousel.Caption className="home-promotion-caption">
//             <h3>Second promotion</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item interval={2000}>
//           <img
//             className="d-block w-100"
//             src="https://picsum.photos/800/400?text=Third slide&bg=373940"
//             alt="Third Promotion"
//           />
//           <Carousel.Caption className="home-promotion-caption">
//             <h3>Third promotion</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>

//       {/* Banner */}
//       <div className="home-banner">
//         <div className="home-banner-box">Banner</div>
//       </div>

//       {/* Lastest Product */}
//       <Container fluid className="home-lastest-product">
//         {/* Head */}
//         <Row>
//           <Col xs={6} md={8} className="home-lastest-product-head">
//             <h3>Lastest Products</h3>
//           </Col>
//           <Col xs={12} md={4} className="home-discover">
//             <div className="home-discover-box">
//               <h5>Discover more</h5>
//               <div className="discover-arrow-img">
//                 <img src={arrow} alt="right arrow" width="100%" />
//               </div>
//             </div>
//           </Col>
//         </Row>

//         {/* New product */}
//         <div className="home-new-product">
//           <Swiper {...params} ref={swiperRef}>
//             {productItem()}
//           </Swiper>
//         </div>

//         {/* Button */}
//         <Row>
//           <Col xs sm={12} className="home-lastest-product-arrow">
//             <Button variant="light" onClick={goPrev}>
//               <img src={prev} width="40vmin" />
//             </Button>
//             <Button variant="light" onClick={goNext}>
//               <img src={next} width="40vmin" />
//             </Button>
//           </Col>
//         </Row>
//       </Container>

//       <Footer />
//     </div>
//   );
// };

// export default Home;
import React from "react";
import { Link } from "react-router-dom";
import { Badge, Carousel, Col, Container, Row } from "react-bootstrap";
import App from "../../../App";

// icon
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiArrowRightLine } from "react-icons/ri";

// Component
import Footer from '../../../Components/Footer/Footer';

import { PRODUCT_QUERY } from "../../../graphql/productQuery";
import { PROMOTION_QUERY } from "../../../graphql/promotionQuery";
import { useQuery } from "@apollo/client";

// CSS
import './Home.css';

// image
import banner1 from '../../../img/banner_1.png';
import banner2 from '../../../img/banner_2.png';

import ex_img from '../../../img/product-ex.png';
import exProduct from '../exProduct.json';

const commaNumber = require("comma-number");

const Home = () => {
  const { data } = useQuery(PRODUCT_QUERY);
  const { promo } = useQuery(PROMOTION_QUERY);

  const slidePrev = (id, size) => {
    document.getElementById(id).scrollLeft -= size;
  }

  const slideNext = (id, size) => {
    document.getElementById(id).scrollLeft += size;
  }

  return (
    <div className="page-home">
      {/* Banner */}
      <Carousel className="home-promo">
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First Banner"
          />
          {/* <Carousel.Caption className="home-banner-caption">
                        <h3>First Banner</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second Banner"
          />
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
            <Link to="/promotions" className="home-discover-box">
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
            <Link to="/promotions" className="home-discover-box">
              <h5>See more</h5>
              <div className="discover-arrow">
                <RiArrowRightLine />
              </div>
            </Link>
            <div className="slide-btn-box">
              <button className="slide-btn" onClick={() => slidePrev('pr-slide', 500)}>
                <IoIosArrowBack />
              </button>
              <button className="slide-btn" onClick={() => slideNext('pr-slide', 500)}>
                <IoIosArrowForward />
              </button>
            </div>
          </div>
          <div id="pr-slide" className="home-promotion-inner">
            <div className="home-promotion-wrapper">
              {exProduct.map((item) => {
                return (
                  <Link to={"/products/" + item.productSlug} className="home-promotion-box">
                    <div className="home-promotion-img">
                      <img
                        src={ex_img}
                        alt={item.name}
                        width="100%"
                      />
                    </div>
                    <div className="home-promotion-detail">
                      <div className="home-promotion-name">
                        <h5>{item.name}</h5>
                      </div>
                      <div className="home-promotion-price">
                        <h5><span className="new-price">{commaNumber(item.price - (item.price * item.discount))}</span> <span className="old-price">{commaNumber(item.price)}</span> THB</h5>
                      </div>
                    </div>
                  </Link>
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
            <Link to="/products" className="home-discover-box">
              <h5>Discover more</h5>
              <div className="discover-arrow">
                <RiArrowRightLine />
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={4} md={4} className="home-newest-product-btn">
            <div className="slide-btn-box">
              <button className="slide-btn" onClick={() => slidePrev('new-slide', 700)}>
                <IoIosArrowBack />
              </button>
              <button className="slide-btn" onClick={() => slideNext('new-slide', 700)}>
                <IoIosArrowForward />
              </button>
            </div>
          </Col>
        </Row>

        {/* Newest product */}
        <div className="home-newest-product">
          <div id="new-slide" className="home-newest-inner">
            {exProduct.map((product, index) => {
              if (index < 8) {
                return (
                  <Link to={"/products/" + product.productSlug} className="home-newest-box">
                    <div className="home-newest-img">
                      <img
                        src={ex_img}
                        alt={product.name}
                        width="100%"
                      />
                    </div>
                    <div className="home-newest-detail">
                      <div className="home-newest-name">
                        <h5>{product.name}</h5>
                      </div>
                      <div className="home-newest-price">
                        <h5>{commaNumber(product.price)} THB</h5>
                      </div>
                    </div>
                  </Link>
                )
              }
            })}
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default Home;
