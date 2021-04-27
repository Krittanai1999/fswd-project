import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../../Sidebar/sidebar";
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
import { PROMOTION_QUERY } from "../../../graphql/promotionQuery";
import { DELETE_PROMOTION_MUTATION } from "../../../graphql/deletePromotion";
import { useQuery, useMutation } from "@apollo/client";
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
  const [deletePromotion] = useMutation(DELETE_PROMOTION_MUTATION);
  const removePromotion = async (id) => {
    try {
      await deletePromotion({
        variables: { id },
        refetchQueries: [{ query: PROMOTION_QUERY }],
      });
      alert("Promotion Deleted");
    } catch (err) {
      console.log(err);
      alert("Try Again!");
    }
  };

  const promotionItem = () => {
    return data?.promotions?.map((promo) => (
      <Grid item xs={3}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                <span
                  style={{
                    color: "#383f51",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
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
              Amount: {promo.amount}
            </Button>
            <Button size="small" color="primary" variant="contained">
              Edit
            </Button>
            <Button
              size="small"
              variant="outlined"
              style={{ color: "red" }}
              onClick={() => removePromotion(promo._id)}
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
          <h2>PROMOTION</h2>
        </nav>

        <div style={button}>
          <Button
            component={Link}
            to="/admin/promotion/create"
            variant="contained"
            style={{ backgroundColor: "#8FBC8F" }}
          >
            Create Promotion
          </Button>
        </div>

        <Paper className={classes.paper1}>
          <Grid container spacing={3}>
            {promotionItem()}
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

export default AdminPromotion;
