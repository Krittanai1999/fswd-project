import App from "../App";
import React, { useCallback, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router";
import { useMutation } from "@apollo/client";
import { CREATE_USER_MUTATION } from "../graphql/createUserMutation";
import { ME_QUERY } from "../graphql/meQuery";

const useStyles = makeStyles((s) => ({
  loginBox: {
    backgroundColor: "#D8BFD8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  input: {
    backgroundColor: "white",
    borderRadius: "30px",
    width: "80%",
    marginBottom: "2.5%",
  },
  form: {
    display: "contents",
  },

  titleLogin: {
    width: "80%",
    marginBottom: "2.5%",
    marginTop: "2.5%",
  },
}));
const Register = () => {
  const classes = useStyles();
  const history = useHistory();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [createUser] = useMutation(CREATE_USER_MUTATION);
  const handleNameChange = useCallback((e) => {
    setName(e.target.value);
  }, []);
  const handleUsernameChange = useCallback((e) => {
    setUsername(e.target.value);
  }, []);
  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  const handleAddressChange = useCallback((e) => {
    setAddress(e.target.value);
  }, []);
  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);
  const handleTelChange = useCallback((e) => {
    setTel(e.target.value);
  }, []);
  const handleRegister = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const variables = {
          record: { createUser, name, username, password, address, email, tel },
        };
        await createUser({ variables });
        setName("");
        setUsername("");
        setPassword("");
        setAddress("");
        setEmail("");
        setTel("");
        history.push("/login");
        alert("You Can Login Now!");
      } catch (err) {
        console.log(err);
        alert("Try Again!");
      }
    },
    [createUser, history, name, username, password, address, email, tel]
  );
  return (
    <div>
      <App />
      <div className={classes.loginBox}>
        <div className={classes.titleLogin}>
          <Typography variant="h5">Register</Typography>
        </div>
        <form className={classes.form} onSubmit={handleRegister}>
          <TextField
            className={classes.input}
            label="Name"
            variant="filled"
            type="text"
            required
            value={name}
            onChange={handleNameChange}
          />
          <TextField
            className={classes.input}
            label="Username"
            variant="filled"
            type="text"
            required
            value={username}
            onChange={handleUsernameChange}
          />
          <TextField
            className={classes.input}
            label="Password"
            variant="filled"
            type="password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <TextField
              className={classes.input}
              label="Address"
              variant="filled"
              type="text"
              value={address}
              onChange={handleAddressChange}
              required
          />
           <TextField
              className={classes.input}
              label="Email"
              variant="filled"
              type="text"
              value={email}
              onChange={handleEmailChange}
              required
          />
          <TextField
              className={classes.input}
              label="Tel"
              variant="filled"
              type="text"
              value={tel}
              onChange={handleTelChange}
              required
          />
          <Button variant="contained" color="primary" type="submit">
            Sign up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
