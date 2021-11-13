import React from 'react';
import './header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://images.pexels.com/photos/1165991/pexels-photo-1165991.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
        </div>
    )
}

export default Header;