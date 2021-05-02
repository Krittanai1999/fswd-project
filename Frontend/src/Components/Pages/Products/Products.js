import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

import Cards from "../../ProductCard/ProductCard";
import Pagination from "../../Pagination/Pagination";

import Footer from "../../Footer/Footer";
// icon

// CSS
import "./Product.css";

// img
import ex_img from "../../../img/product-ex.png";

import exProduct from "../exProduct.json";

const commaNumber = require("comma-number");

const Products = () => {
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

  return (
    <div className="product-display-page">
      <div className="product-display-header">
        <h3>Product</h3>
        <select className="product-filter" placeholder="Price" />
      </div>

      <Container fluid>
        <Row>
          <Cards posts={currentPosts} loading={loading} />
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
