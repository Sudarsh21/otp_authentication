import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/dashboard.css";

import home from "../assets/img/Vector.svg";
import settings from "../assets/img/Group 523.svg";

import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";


const Dashboard = () => {
    const [activeSection, setActiveSection] = useState("home");
    const navigate = useNavigate();

    const lineData = {
        labels: ["12th Oct", "13th Oct", "14th Oct", "15th Oct", "16th Oct", "17th Oct"],
        datasets: [
            {
                label: "Inventory %",
                data: [85, 90, 80, 95, 70, 93],
                fill: true,
                backgroundColor: "rgba(255, 193, 7, 0.2)",
                borderColor: "#FFC107",
                tension: 0.4,
            },
        ],
    };

    const doughnutData = {
        labels: ["Remaining", "Consumed"],
        datasets: [
            {
                label: "Battery %",
                data: [65, 35],
                backgroundColor: ["#1E88E5", "#FFC107"],
                hoverOffset: 4,
            },
        ],
    };

    const commonOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    color: "rgba(255,255,255,0.1)",
                },
            },
        },
    };


    const renderContent = () => {
        switch (activeSection) {
            case "home":
                return <div className="content">
                    <div className="dashboard-charts" style={{ display: "flex", gap: "20px", justifyContent: "space-evenly", marginTop: "80px", }}>
                        {/* Line Chart */}
                        <div style={{ width: "30%", backgroundColor: "rgba(0, 0, 0, 0.1)", }}>
                            <h4 style={{ color: "#fff" }}>Inventory</h4>
                            <Line data={lineData} options={commonOptions} />
                        </div>

                        {/* Doughnut Chart */}
                        <div style={{ width: "30%", backgroundColor: "rgba(0, 0, 0, 0.1)", }}>
                            <h4 style={{ color: "#fff" }}>Battery</h4>
                            <Doughnut data={doughnutData} options={commonOptions} />
                        </div>

                        {/* Line Chart */}
                        <div style={{ width: "30%", backgroundColor: "rgba(0, 0, 0, 0.1)", }}>
                            <h4 style={{ color: "#fff" }}>Margin</h4>
                            <Line data={lineData} options={commonOptions} />
                        </div>
                    </div>
                </div>;
            case "settings":
                return <div className="content">Settings Content</div>;
            default:
                return <div className="content">Home Content</div>;
        }
    };


    return (
        <div className="login-page">
            <div className="top-heading" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p className="top-heading-text-dash">Analytics Dashboard</p>
                <a 
                    href="/" 
                    className="logout-link" 
                    style={{ color: "#fff", textDecoration: "none", marginRight: "20px", fontWeight: "bold" }}
                >
                Logout
                </a>
            </div>


            
            <div className="dashboard-container">
                <div className="sidebar">
                    <button onClick={() => setActiveSection("home")} style={{ backgroundColor: activeSection === "home" ? "rgba(0, 0, 0, 0.1)" : "transparent", }} ><img className="home" src={home} alt="Home" /></button>
                    <button onClick={() => setActiveSection("settings")} style={{ backgroundColor: activeSection === "settings" ? "rgba(0, 0, 0, 0.1)" : "transparent", }} ><img className="settings" src={settings} alt="Settings" style={{ opacity: activeSection === "settings" ? 1 : 0.5 }} /></button>
                </div>

                <div className="content-area">{renderContent()}</div>
            </div>



            <div className="bottom-heading">
                <p className="bottom-heading-text">&#169; 2025, Greendzine Technologies Pvt. Ltd. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Dashboard;