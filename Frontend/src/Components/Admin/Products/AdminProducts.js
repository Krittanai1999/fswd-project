import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
import Sidebar from "../../../Sidebar/sidebar";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { PRODUCT_QUERY } from "../../../graphql/productQuery";
import { DELETE_PRODUCT_MUTATION } from "../../../graphql/deleteProduct";
import { useQuery, useMutation } from "@apollo/client";

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

const AdminProducts = () => {
  const classes = useStyles();
  const { data } = useQuery(PRODUCT_QUERY);
  const [deleteProduct] = useMutation(DELETE_PRODUCT_MUTATION);
  const removeProduct = async (id) => {
    try {
      await deleteProduct({
        variables: { id },
        refetchQueries: [{ query: PRODUCT_QUERY }],
      });
      alert("Product Deleted");
    } catch (err) {
      console.log(err);
      alert("Try Again!");
    }
  };

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
          <CardActions>
            <Link
              to={{
                pathname: `/admin/product/${product.slug}`,
              }}
              style={{ textDecoration: "none" }}
            >
              <Button
                size="large"
                variant="outlined"
                style={{ color: "green" }}
              >
                Edit
              </Button>
            </Link>

            <Button
              size="small"
              variant="outlined"
              style={{ color: "red" }}
              onClick={() => removeProduct(product._id)}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ));
  };
  return (
    <div class="d-flex flex-row w-100">
      <Sidebar />
      <div style={context}>
        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <h2>PRODUCT</h2>
        </nav>

        <div style={button}>
          <Button
            component={Link}
            to="/admin/products/create"
            variant="contained"
            style={{ backgroundColor: "#8FBC8F" }}
          >
            Create Product
          </Button>
        </div>

        <Paper className={classes.paper1}>
          <Grid container spacing={3}>
            {productItem()}
          </Grid>
          <br />
        </Paper>
      </div>
    </div>
  );
};

const context = {
  width: "100%",
};

const button = {
  marginLeft: "1%",
  marginTop: "1%",
};

export default AdminProducts;
