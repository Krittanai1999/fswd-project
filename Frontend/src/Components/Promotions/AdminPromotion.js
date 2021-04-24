import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../Sidebar/sidebar";
import { Link } from "react-router-dom";
import {
  Paper,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import { PROMOTION_QUERY } from "../../graphql/promotionQuery";
import { useQuery } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper1: {
    padding: theme.spacing(2),
    backgroundColor: "#e0dfec",
  },
  root: {
    maxWidth: 340,
  },
}));

const AdminPromotion = () => {
  const classes = useStyles();
  const { data } = useQuery(PROMOTION_QUERY);

  const promotionItem = () => {
    return data?.promotions?.map((promo) => (
      <Grid item xs={3}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                <span style={{ color: "#383f51", fontWeight: "bold", textDecoration: "underline" }}>
                  {promo.discount}% Sale off
                </span>
              </Typography>
              <Typography variant="body1" color="textPrimary" component="p">
                Product: {promo.product.name} <br />
                Price: <b>{promo.total}</b>{" "}
                <span style={{ textDecoration: "line-through", fontSize: 16 }}>
                  {promo.product.price}
                </span>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="secondary" variant="contained">
              Active: {promo.amount}
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
          <h2>PROMOTION</h2>
        </nav>

        <Paper className={classes.paper1}>
          
          <Grid container spacing={3}>
            {promotionItem()}
          </Grid>
          <br/>
          <div class="d-flex justify-content-around">
            <Link to="/admin/promotion/create" exact={true}>
              <button class="btn btn-success">Create Promotions</button>
            </Link>

            <Link to="/admin/promotion/:promotionId" exact={true}>
              <button class="btn btn-success">Update Promotions</button>
            </Link>
          </div>
        </Paper>
      </div>
    </div>
  );
};

const context = {
  width: "100%",
};

export default AdminPromotion;
