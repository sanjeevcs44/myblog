import React from 'react';
import './post.css'
const Post = () => {
    return (
        <div className="post">
            <img className="postImg" src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">music</span>
                    <span className="postCat">sport</span>
                </div>
                <span className="postTitle">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </span>
                <hr />
                <span className="postDate">1 housr ago</span>
            </div>
            <p className="postDesc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,

            </p>
        </div>
    )
}
export default Post;
