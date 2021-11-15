import React from 'react';
import './register.css';
import Sidebar from '../../components/sidebar/Sidebar';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div className="register">
            <span className="registerTitle">
                Register
            </span>
            <form className="registerForm">
                <label>UserName</label>
                <input type="text" className="registerInput" placeholder="Enter your username..." />

                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Enter your Email..." />

                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter your Password..." />
                <button className="registerButton">Register</button>

            </form>
            <button className="registerRegisterButton">
                <Link to="/login" className="link">Login
                </Link>

            </button>

        </div>
    )
}

export default Register;