import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Paper,
} from "@material-ui/core";
import { Col, Container, Row } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";

// Component
import Footer from "../../Footer/Footer";
import Cards from "../../ProductCard/ProductCard";
import Pagination from "../../Pagination/Pagination";

import { PROMOTION_QUERY } from "../../../graphql/promotionQuery";
import { useQuery } from "@apollo/client";

import App from "../../../App";
// icon

const useStyles = makeStyles((theme) => ({
  paper1: {
    padding: theme.spacing(2),
    backgroundColor: "#e0dfec",
  },
  root: {
    maxWidth: 400,
    height: 400,
    marginLeft: "1%",
  },
}));

const Products = () => {
  const classes = useStyles();
  const { data } = useQuery(PROMOTION_QUERY);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  // API Test
  useEffect(() => {
    const fecthPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fecthPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  const promotionItem = () => {
    return data?.promotions?.map((promo) => (
      <Grid item xs={3}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h1" component="h1">
                <span
                  style={{
                    color: "#383f51",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    fontSize: "48px",
                  }}
                >
                  {promo.discount}% Sale off
                </span>
              </Typography>
              <Typography variant="body1" color="textPrimary" component="p">
                Product: {promo.product.name} <br />
                <span style={{ fontSize: 30 }}>
                Price: <b>{promo.total} ฿</b>{" "}</span>
                <span style={{ textDecoration: "line-through", fontSize: 16 }}>
                  {promo.product.price} ฿
                </span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ));
  };

  return (
    <div className="product-display-page">
      <App />
      <div className="product-display-header">
        <h3>Promotion</h3>
        {/* <select
                    className="product-filter"
                    placeholder="Price"
                /> */}
      </div>

      <Container fluid>
        <Row>
          {/* <Cards posts={currentPosts} loading={loading} /> */}
          {promotionItem()}<br/>
        </Row>
        {/* <Row>
          <Col xs={12}>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
              nextPage={nextPage}
              prevPage={prevPage}
              currentPage={currentPage}
            />
          </Col>
        </Row> */}
      </Container>

      <Footer />
    </div>
  );
};

export default Products;
