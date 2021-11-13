import React from 'react';
import './write.css';
const Write = () => {
    return (
        <div className="write">
            <img src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="writeImg" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell Your Story" type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">publish</button>
            </form>
        </div>
    )
}
export default Write; 