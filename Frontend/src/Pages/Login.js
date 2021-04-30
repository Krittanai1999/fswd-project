import React, { useState } from "react";
import { Link } from "react-router-dom";

// icon
import {
    AiOutlineEye,
    AiOutlineEyeInvisible
} from 'react-icons/ai';

// image
import logo from '../img/logo.png';

// CSS
import '../style/Login&Register.css';

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