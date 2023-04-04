import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'
const Post = ({ post }) => {
      const { id, title } = post;
      const navigate = useNavigate();
      
      const handleNavigation = ()=>{
            navigate(`/post/${id}`)
      }

      return (
            <div className='post'>
                  <h2>Post No: {id}</h2>
                  <h2 >Post Title:<span className='title'> <small>{title}</small></span> </h2>
                  <Link to={`/post/${id}`}>Show Details</Link>
                  <Link to={`/post/${id}`}><button>Show Post Details</button></Link>
                  <button onClick={handleNavigation}>With handler</button>
            </div>
      );
};

export default Post;