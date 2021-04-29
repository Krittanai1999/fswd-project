import React from "react";
import { Link } from "react-router-dom";
// image
import logo from '../img/logo.png';

// CSS
import '../style/Login&Register.css';

const Register = () => {
    return (
        <div className="register-page">
            <div className="container-bg">
                <div className="container-logo">
                    <img
                        src={logo}
                        alt="logo"
                        width="50%"
                    />
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
                        <input
                            className="Form-input Registerform-password"
                            type="password"
                            placeholder="Password"
                            // value=""
                        />
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
    )
};

export default Register;