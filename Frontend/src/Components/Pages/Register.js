import React, { useState } from "react";
import { Link } from "react-router-dom";

// icon
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// image
import logo from "../../img/logo.png";

// CSS
import "../../styles/Login&Register.css";

import App from "../../App";
const eyeVisible = <AiOutlineEye />;
const eyeInvisible = <AiOutlineEyeInvisible />;

const Register = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const togglePasswordVisible = () => {
    setPasswordShow(passwordShow ? false : true);
  };

  return (
    <>
      <App />
      <div className="register-page">
        <div className="container-bg">
          <div className="container-logo">
            <img src={logo} alt="logo" width="50%" />
          </div>
          <div className="container-form">
            <h5>Create profile</h5>
            <form className="Form-box Registerform-from">
              <div className="Registerform-name">
                <input
                  className="Form-input Registerform-firstname"
                  type="text"
                  placeholder="First name"
                  // value=""
                />
                <input
                  className="Form-input Registerform-lastname"
                  type="text"
                  placeholder="Last name"
                  // value=""
                />
              </div>
              <input
                className="Form-input Registerform-username"
                type="text"
                placeholder="Username"
                // value=""
              />
              <div className="password-wrapper">
                <input
                  className="Form-input Registerform-password"
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
              <button className="Form-btn Registerform-btn" type="submit">
                Register
              </button>
            </form>

            <div className="to-another-page">
              Already have an account?
              <Link to="/login" className="user-link">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
// import App from "../App";
// import React, { useCallback, useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { TextField, Typography, Button } from "@material-ui/core";
// import { useHistory } from "react-router";
// import { useMutation } from "@apollo/client";
// import { CREATE_USER_MUTATION } from "../graphql/createUserMutation";

// const useStyles = makeStyles((s) => ({
//   loginBox: {
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
//     marginTop: "2.5%",
//   },
// }));
// const Register = () => {
//   const classes = useStyles();
//   const history = useHistory();
//   const [name, setName] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [address, setAddress] = useState("");
//   const [email, setEmail] = useState("");
//   const [tel, setTel] = useState("");
//   const [createUser] = useMutation(CREATE_USER_MUTATION);
//   const handleNameChange = useCallback((e) => {
//     setName(e.target.value);
//   }, []);
//   const handleUsernameChange = useCallback((e) => {
//     setUsername(e.target.value);
//   }, []);
//   const handlePasswordChange = useCallback((e) => {
//     setPassword(e.target.value);
//   }, []);
//   const handleAddressChange = useCallback((e) => {
//     setAddress(e.target.value);
//   }, []);
//   const handleEmailChange = useCallback((e) => {
//     setEmail(e.target.value);
//   }, []);
//   const handleTelChange = useCallback((e) => {
//     setTel(e.target.value);
//   }, []);
//   const handleRegister = useCallback(
//     async (e) => {
//       e.preventDefault();
//       try {
//         const variables = {
//           record: { createUser, name, username, password, address, email, tel },
//         };
//         await createUser({ variables });
//         setName("");
//         setUsername("");
//         setPassword("");
//         setAddress("");
//         setEmail("");
//         setTel("");
//         history.push("/login");
//         alert("You Can Login Now!");
//       } catch (err) {
//         console.log(err);
//         alert("Try Again!");
//       }
//     },
//     [createUser, history, name, username, password, address, email, tel]
//   );
//   return (
//     <div>
//       <App />
//       <div className={classes.loginBox}>
//         <div className={classes.titleLogin}>
//           <Typography variant="h5">Register</Typography>
//         </div>
//         <form className={classes.form} onSubmit={handleRegister}>
//           <TextField
//             className={classes.input}
//             label="Name"
//             variant="filled"
//             type="text"
//             required
//             value={name}
//             onChange={handleNameChange}
//           />
//           <TextField
//             className={classes.input}
//             label="Username"
//             variant="filled"
//             type="text"
//             required
//             value={username}
//             onChange={handleUsernameChange}
//           />
//           <TextField
//             className={classes.input}
//             label="Password"
//             variant="filled"
//             type="password"
//             required
//             value={password}
//             onChange={handlePasswordChange}
//           />
//           <TextField
//               className={classes.input}
//               label="Address"
//               variant="filled"
//               type="text"
//               value={address}
//               onChange={handleAddressChange}
//               required
//           />
//            <TextField
//               className={classes.input}
//               label="Email"
//               variant="filled"
//               type="text"
//               value={email}
//               onChange={handleEmailChange}
//               required
//           />
//           <TextField
//               className={classes.input}
//               label="Tel"
//               variant="filled"
//               type="text"
//               value={tel}
//               onChange={handleTelChange}
//               required
//           />
//           <Button variant="contained" color="primary" type="submit">
//             Sign up
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;
