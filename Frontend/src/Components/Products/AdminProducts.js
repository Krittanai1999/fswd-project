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
import Sidebar from "../../Sidebar/sidebar";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { PRODUCT_QUERY } from "../../graphql/productQuery";
import { useQuery } from "@apollo/client";

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
    maxWidth: 345,
    borderRadius: 0,
  },
  media: {
    height: 300,
  },
  paper1: {
    padding: theme.spacing(2),
    backgroundColor: "#e0dfec",
  },
}));

const AdminProducts = () => {
  const classes = useStyles();
  const { data } = useQuery(PRODUCT_QUERY);

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
            <Link to="/admin/products/:productID" exact={true}>
              <Button
                size="large"
                variant="outlined"
                style={{ color: "green" }}
              >
                Edit
              </Button>
            </Link>

            <Button size="small" variant="outlined" style={{ color: "red" }}>
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

        <div class="d-flex justify-content-start">
          <Link to="/admin/products/create" exact={true}>
            <button class="btn btn-success">Create Product</button>
          </Link>
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

export default AdminProducts;
