import logo from './logo.svg';
import './App.css';
import Login from './pages/LoginPage';
import OTPValidation from './pages/OTPValidationPage';
import Dashboard from './pages/DashboardPage';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/otp" element={<OTPValidation />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
