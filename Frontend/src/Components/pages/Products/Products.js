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

import { PRODUCT_QUERY } from "../../../graphql/productQuery";
import { useQuery } from "@apollo/client";

import App from "../../../App";
// icon

// CSS
import "./Product.css";

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
    marginLeft: "10%",
    marginTop: "5%",
  },
  media: {
    height: 500,
    
  },
  paper1: {
    padding: theme.spacing(2),
    backgroundColor: "#e0dfec",
    
  },
}));

const Products = () => {
  const classes = useStyles();
  const { data } = useQuery(PRODUCT_QUERY);
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
    <div className="product-display-page">
      <App />
      <div className="product-display-header">
        <h3>Product</h3>
        {/* <select
                    className="product-filter"
                    placeholder="Price"
                /> */}
      </div>

      <Container fluid>
        <Row>
          {/* <Cards posts={currentPosts} loading={loading} /> */}
          {productItem()}
        </Row>
        <Row>
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
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Products;
