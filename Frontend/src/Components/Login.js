import React from "react";
import { Link } from "react-router-dom";
// image
import logo from '../img/logo.png';

// CSS
import '../style/Login&Register.css';

const Login = () => {
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
                        <input
                            className="Form-input Loginform-password"
                            type="password"
                            placeholder="Password"
                            // value=""
                        />
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