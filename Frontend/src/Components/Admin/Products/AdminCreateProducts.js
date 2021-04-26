import React, { useCallback, useState } from "react";
import {
  Grid,
  Button,
  TextField,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { gql, useMutation } from "@apollo/client";
import { PRODUCT_QUERY } from "../../../graphql/productQuery";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../../Sidebar/sidebar";
import {useHistory} from "react-router";
import { Link } from "react-router-dom";

const CREATE_PRODUCT = gql`
  mutation($record: CreateOneProductInput!) {
    createProduct(record: $record) {
      recordId
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  formControl: {
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AdminCreateProducts = () => {
  const classes = useStyles();
  const history = useHistory();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  // const [tags, setTag]= useState("");
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const handleNameChange = useCallback((e) => {
    setName(e.target.value);
  }, []);
  const handleSlugChange = useCallback((e) => {
    setSlug(e.target.value);
  }, []);
  const handleDescriptionChange = useCallback((e) => {
    setDescription(e.target.value);
  }, []);
  const handlePriceChange = useCallback((e) => {
    setPrice(e.target.value);
  }, []);
  const handleTypeChange = useCallback((e) => {
    setType(e.target.value);
  }, []);
  const handleQuantityChange = useCallback((e) => {
    setQuantity(e.target.value);
  }, []);
  const handleImageUrlChange = useCallback((e) => {
    setImageUrl(e.target.value);
  }, []);
  // const handleTaghange = useCallback((e) => {
  //     setTag(e.target.value);
  // }, []);

  const handleCreateProduct = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const variables = {
          record: {
            createProduct,
            name,
            description,
            price,
            type,
            quantity,
            imageUrl,
            slug,
          },
        };
        await createProduct({
          variables,
          refetchQueries: [{ query: PRODUCT_QUERY }],
        });
        setName("");
        setSlug("");
        setDescription("");
        setPrice("");
        setType("");
        setQuantity("");
        setImageUrl("");
        history.push("/admin/products");
        alert("New Product Added");
      } catch (err) {
        console.log(err);
        alert("Try Again!");
      }
    },
    [createProduct, name, description, price, type, quantity, imageUrl, slug]
  );

  return (
    <React.Fragment>
      <div class="d-flex flex-row w-100">
        <Sidebar />
        <div style={context}>
          <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <h2>CREATE PRODUCT</h2>
          </nav>
          <br />
          <form onSubmit={handleCreateProduct} style={form}>
            <Grid container spacing={3}>
              <Grid item xs={5}>
                <TextField
                  label="Product Name"
                  variant="outlined"
                  style={{ width: "100%" }}
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={type}
                    onChange={handleTypeChange}
                    label="Type"
                    required
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"BEDROOM"}>Bedroom</MenuItem>
                    <MenuItem value={"BATHROOM"}>Bathroom</MenuItem>
                    <MenuItem value={"KITCHEN"}>Kitchen</MenuItem>
                    <MenuItem value={"LIVINGROOM"}>Living Room</MenuItem>
                    <MenuItem value={"OTHER"}>Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  label="Slug"
                  variant="outlined"
                  style={{ width: "100%" }}
                  type="text"
                  value={slug}
                  onChange={handleSlugChange}
                  required
                />
              </Grid>
              <Grid item xs={9}>
                <TextField
                  label="Description"
                  variant="outlined"
                  style={{ width: "100%" }}
                  type="text"
                  value={description}
                  onChange={handleDescriptionChange}
                  required
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  label="Price (THB)"
                  variant="outlined"
                  style={{ width: "100%" }}
                  type="text"
                  value={price}
                  onChange={handlePriceChange}
                  required
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Quantity"
                  variant="outlined"
                  style={{ width: "100%" }}
                  type="text"
                  value={quantity}
                  onChange={handleQuantityChange}
                  required
                />
              </Grid>
              <Grid item xs={9}>
                <TextField
                  label="imageUrl"
                  variant="outlined"
                  style={{ width: "100%" }}
                  type="text"
                  value={imageUrl}
                  onChange={handleImageUrlChange}
                  required
                />
              </Grid>
              {/* <Grid item xs={5}>
                 <TextField
                     label="Tag"
                     variant="outlined"
                     style={{ width: "100%"}}
                     type="text"
                     value={tag}
                     onChange={handleTaghange}
                     required
                 />
              </Grid> */}
            </Grid>
            <br />
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
            <Button
              component={Link}
              to="/admin/products"
              variant="contained"
              style={{ backgroundColor: "#A9A9A9" }}
            >
              Back
            </Button>
          </form>
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

export default AdminCreateProducts;
