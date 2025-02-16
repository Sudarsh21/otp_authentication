import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/otpvalidation.css";

const OTPValidation = () => {
    const [timer, setTimer] = useState(30);
    const [isClickable, setIsClickable] = useState(false);
    const [otp, setOtp] = useState("");
    const [generatedOtp, setGeneratedOtp] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Generate OTP once when the component mounts
        generateOtp();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev > 1) {
                    return prev - 1;
                } else {
                    clearInterval(interval);
                    setIsClickable(true);
                    localStorage.removeItem("otp");
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const generateOtp = () => {
        const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
        setGeneratedOtp(newOtp);
        localStorage.setItem("otp", newOtp);
        alert(`Your OTP is: ${newOtp}`); // Display OTP
    };

    const handleResendClick = () => {
        if (isClickable) {
            setTimer(30);
            setIsClickable(false);
            generateOtp();
        }
    };

    const handleOtpChange = (e) => {
        const value = e.target.value;
        if (/^\d{0,6}$/.test(value)) {
            setOtp(value);
        }
    };

    const validateOtp = () => {
        const storedOtp = localStorage.getItem("otp");
        if (otp === storedOtp) {
            navigate("/dashboard");
        } else {
            alert("Invalid or expired OTP!");
        }
    };

    return (
        <div className="otpvalidation-page">
            <div className="top-heading">
                <p className="top-heading-text">Analytics Dashboard</p>
            </div>
            <div className="container">
                <div className="left-container">
                    <div className="heading-otp">
                        <h2>Enter OTP sent to Email</h2>
                    </div>
                    <div className="inputbox">
                        <input
                            type="text"
                            placeholder="OTP"
                            className="input"
                            value={otp}
                            onChange={handleOtpChange}
                        />
                        <div className="validation-container">
                            <p
                                className="resend-otp"
                                onClick={handleResendClick}
                                style={{
                                    color: isClickable ? "white" : "grey",
                                    cursor: isClickable ? "pointer" : "not-allowed",
                                }}
                            >
                                Resend OTP
                            </p>
                            <p
                                className="timer"
                                style={{ color: timer === 0 ? "red" : "white" }}
                            >
                                0:{timer.toString().padStart(2, "0")} sec
                            </p>
                        </div>
                    </div>
                    <button
                        className="btn"
                        disabled={otp.length !== 6}
                        style={{
                            cursor: otp.length === 6 ? "pointer" : "not-allowed",
                            backgroundColor: otp.length === 6 ? "#37cd49" : "grey",
                        }}
                        onClick={validateOtp}
                    >
                        Validate
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

export default OTPValidation;