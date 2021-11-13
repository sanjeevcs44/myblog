import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar'
import "./setting.css";
const Settings = () => {
    return (
        <div className="setting">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">update your account</span>
                    <span className="settingDeleteTitle">delete your account</span>
                </div>
                <form className="settingForm">
                    <label>Profile Picture</label>
                    <div className="settingPP">
                        <img src="http://www.rishishwar.in/images/team/sanjeev.jpg" />
                        <label htmlFor="fileInput">
                            <i className="settingPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                    </div>
                    <label>User Name</label>
                    <input type="text" placeholder="safak" />
                    <label>User Name</label>
                    <input type="teemailxt" placeholder="safak@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )

}

export default Settings;