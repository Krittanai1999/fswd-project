import React, { useState } from "react";
import { Link } from "react-router-dom";

// icon

import {
    AiOutlineEye,
    AiOutlineEyeInvisible
} from 'react-icons/ai';

// image
import logo from '../../img/logo.png';

// CSS
import '../../styles/Login&Register.css';

const eyeVisible = <AiOutlineEye />;
const eyeInvisible = <AiOutlineEyeInvisible />;

const Login = () => {
    const [passwordShow, setPasswordShow] = useState(false);
    const togglePasswordVisible = () => {
        setPasswordShow(passwordShow ? false : true);
    };

    return (
        <div className="login-page">
            <div className="container-bg">
                <div className="container-logo">
                    <img
                        src={logo}
                        alt="logo"
                        width="50%"
                    />
                </div>
                <div className="container-form">
                    <h5>Login to OOO</h5>
                    <form className="Form-box Loginform-from">
                        <input
                            className="Form-input Loginform-username"
                            type="text"
                            placeholder="Username"
                            // value=""
                        />
                        <div className="password-wrapper">
                            <input
                                className="Form-input Loginform-password"
                                type={passwordShow ? "text" : "password"}
                                placeholder="Password"
                                // value=""
                            />
                            <i 
                                onClick={togglePasswordVisible}
                                // onMouseEnter={() => setPasswordShow(true)}
                                // onMouseLeave={() => setPasswordShow(false)}
                            >
                                {passwordShow ? eyeVisible : eyeInvisible}
                            </i>
                        </div>
                        <button className="Form-btn Loginform-btn" type="submit">
                            Login
                        </button>
                    </form>

                    <Link to="/register" className="user-link">
                        Create account
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Login;
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import { useHistory } from "react-router-dom";
// import { useSession } from "../contexts/SessionContext";
// import { useState, useCallback } from "react";
// import App from "../App";

// const useStyles = makeStyles((theme) => ({
//   loginBox: {
//     height: "60vh",
//     backgroundColor: "#D8BFD8",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column",
//   },
//   input: {
//     backgroundColor: "white",
//     borderRadius: "30px",
//     width: "80%",
//     marginBottom: "2.5%",
//   },
//   form: {
//     display: "contents",
//   },
  
//   titleLogin: {
//     width: "80%",
//     marginBottom: "2.5%",
//   },
// }));

// const Login = (props) => {
//   const history = useHistory();
//   const { login } = useSession();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const handleUsernameChange = useCallback((e) => {
//     setUsername(e.target.value);
//   }, []);
//   const handlePasswordChange = useCallback((e) => {
//     setPassword(e.target.value);
//   }, []);
//   const handleLogin = useCallback(
//     async (e) => {
//       e.preventDefault();
//       try {
//         await login(username, password);
//         history.push("/");
//       } catch (err) {
//         console.log(err);
//         alert("Username or Password is not correct!!!");
//       }
//     },
//     [login, password, username]
//   );

//   const classes = useStyles();
//   return (
//     <div>
//       <App/>
//       <div className={classes.loginBox}>
//         <div className={classes.titleLogin}>
//           <Typography variant="h5">Login</Typography>
//         </div>
//         <form onSubmit={handleLogin} className={classes.form}>
//           <TextField
//             className={classes.input}
//             label="Username"
//             variant="filled"
//             type="text"
//             value={username}
//             onChange={handleUsernameChange}
//             required={true}
//           />
//           <TextField
//             className={classes.input}
//             label="Password"
//             variant="filled"
//             type="password"
//             value={password}
//             onChange={handlePasswordChange}
//             required={true}
//             l
//           />
//           <div style={{ width: "80%" }}>
//             <Button variant="contained" color="primary" type="submit">
//               Login
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

