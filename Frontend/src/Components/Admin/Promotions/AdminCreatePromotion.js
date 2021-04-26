import React, { useCallback, useState } from "react";
import { Grid, Button, TextField } from "@material-ui/core";

import { gql, useMutation, useQuery } from "@apollo/client";
import { PROMOTION_QUERY } from "../../../graphql/promotionQuery";
import { PRODUCT_QUERY } from "../../../graphql/productQuery";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../../Sidebar/sidebar";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const CREATE_PROMOTION = gql`
  mutation($record: CreateOnePromotionInput!) {
    createPromotion(record: $record) {
      recordId
    }
  }
`;

const ProductData = () => {
  const { loading, error, data } = useQuery(PRODUCT_QUERY);
  if (loading) {
    return "Loading ...";
  }
  if (error) {
    return "Error !!";
  }
  return data?.products?.map((product) => (
    <tr style={{ textAlign: "left" }}>
      <td>{product._id}</td>
      <td>{product.name}</td>
    </tr>
  ));
};

const AdminCreatePromotion = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [discount, setDiscount] = useState("");
  const [productId, setProductId] = useState("");
  const [createPromotion] = useMutation(CREATE_PROMOTION);

  const handleNameChange = useCallback((e) => {
    setName(e.target.value);
  }, []);
  const handleAmountChange = useCallback((e) => {
    setAmount(e.target.value);
  }, []);
  const handleDiscountChange = useCallback((e) => {
    setDiscount(e.target.value);
  }, []);
  const handleProductIdChange = useCallback((e) => {
    setProductId(e.target.value);
  }, []);

  const handleCreatePromotion = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const variables = {
          record: { createPromotion, name, amount, discount, productId },
        };
        await createPromotion({
          variables,
          refetchQueries: [{ query: PROMOTION_QUERY }],
        });
        setName("");
        setAmount("");
        setDiscount("");
        setProductId("");
        history.push("/admin/promotions");
        alert("New Promotion Added");
      } catch (err) {
        console.log(err);
        alert("Try Again!");
      }
    },
    [createPromotion, name, amount, discount, productId]
  );

  return (
    <React.Fragment>
      <div class="d-flex flex-row w-100">
        <Sidebar />
        <div style={context}>
          <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <h2>CREATE PROMOTION</h2>
          </nav>
          <br />

          <form onSubmit={handleCreatePromotion} style={form}>
            <Grid container spacing={3}>
              <Grid item xs={5}>
                <TextField
                  label="Promotion Name"
                  variant="outlined"
                  style={{ width: "100%" }}
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Amount"
                  variant="outlined"
                  style={{ width: "100%" }}
                  type="text"
                  value={amount}
                  onChange={handleAmountChange}
                  required
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  label="Discount (Percent)"
                  variant="outlined"
                  style={{ width: "100%" }}
                  type="text"
                  value={discount}
                  onChange={handleDiscountChange}
                  required
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="ProductID"
                  variant="outlined"
                  style={{ width: "100%" }}
                  type="text"
                  value={productId}
                  onChange={handleProductIdChange}
                  required
                />
              </Grid>
            </Grid>
            <hr />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              value="Submit"
            >
              Create
            </Button>
            {"  "}
            <Link
              to={{
                pathname: `/admin/promotions`,
              }}
              style={{ textDecoration: "none" }}
            >
              <Button variant="outlined" color="secondary">
                Back
              </Button>
            </Link>
          </form>
          <br />
          <h2>Product List</h2>
          <hr />
          <table
            style={{ width: "100%", textAlign: "left", borderSpacing: "5px", marginLeft: "1%"}}
          >
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
            </tr>
            {ProductData()}
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

const context = {
  width: "100%",
};

const form = {
  marginLeft: "10%",
};

export default AdminCreatePromotion;


