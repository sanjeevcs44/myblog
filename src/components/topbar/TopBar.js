import React from 'react';
import "./topbar.css";
import { Link } from 'react-router-dom';
const TopBar = () => {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="fab topIcon fa-facebook-square"></i>
                <i className="fab topIcon fa-twitter-square"></i>
                <i className="fab topIcon fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">

                        <Link to="/">HOME</Link>

                    </li>
                    <li className="topListItem"> <Link className="link" to="/">ABOUT</Link></li>
                    <li className="topListItem"> <Link className="link" to="/">CONTACT</Link></li>
                    <li className="topListItem"> <Link className="link" to="/write">WRITE</Link></li>
                    <li className="topListItem">{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (<img src="http://www.rishishwar.in/images/team/sanjeev.jpg" className="topImg" />) : (
                        <ul className="topList">
                            <li className="topListItem"><Link to="/login" className="link">Login</Link></li>
                            <li className="topListItem"><Link to="/register" className="link">Register</Link></li>
                        </ul>

                    )
                }

                <i className="fas fa-search topSearchIcon"></i>
            </div>
        </div>
    )
}

export default TopBar;