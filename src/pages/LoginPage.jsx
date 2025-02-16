import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSendOTP = () => {
        if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
        }
        navigate("/otp");
    };

    return (
        <div className="login-page">
            <div className="top-heading">
                <p className="top-heading-text">Analytics Dashboard</p>
            </div>
            <div className="login-container">
                <div className="left-container">
                <div className="heading-signin">
                    <h2>Sign In</h2>
                </div>
                <input
                    type="email"
                    placeholder="E-mail"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn" onClick={handleSendOTP}>
                    Send OTP
                </button>
                </div>
                <div className="right-container">
                <p>Web Application with Analytics Dashboard</p>
                </div>
            </div>
            <div className="bottom-heading">
                <p className="bottom-heading-text">
                &#169; 2025, Greendzine Technologies Pvt. Ltd. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Login;