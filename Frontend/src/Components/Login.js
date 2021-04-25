import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useSession } from "../contexts/SessionContext";
import { useState, useCallback } from "react";
import App from "../App";

const useStyles = makeStyles((theme) => ({
  loginBox: {
    height: "60vh",
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
  },
}));

const Login = (props) => {
  const history = useHistory();
  const { login } = useSession();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsernameChange = useCallback((e) => {
    setUsername(e.target.value);
  }, []);
  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await login(username, password);
        history.push("/");
      } catch (err) {
        console.log(err);
        alert("Username or Password is not correct!!!");
      }
    },
    [login, password, username]
  );

  const classes = useStyles();
  return (
    <div>
      <App/>
      <div className={classes.loginBox}>
        <div className={classes.titleLogin}>
          <Typography variant="h5">Login</Typography>
        </div>
        <form onSubmit={handleLogin} className={classes.form}>
          <TextField
            className={classes.input}
            label="Username"
            variant="filled"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required={true}
          />
          <TextField
            className={classes.input}
            label="Password"
            variant="filled"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required={true}
            l
          />
          <div style={{ width: "80%" }}>
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

