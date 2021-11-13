import React from 'react';
import './sidebar.css'
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src="http://www.rishishwar.in/images/team/sanjeev.jpg" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORY </span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Cinema</li>
                    <li className="sidebarListItem">Tag</li>
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className="fab sidebarIcon fa-facebook-square"></i>
                    <i className="fab sidebarIcon fa-twitter-square"></i>
                    <i className="fab sidebarIcon fa-instagram-square"></i>
                </div>
            </div>

        </div>
    )
}
export default Sidebar;