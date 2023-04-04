import React from 'react';
import {useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetail.css'
const PostDetail = () => {
      const post = useLoaderData();
      const navigate = useNavigate();

      const handlerGoBack = () => {
            navigate(-1);
      }
      return (
            <div className='detail'>
                  <h4>Details of your post</h4>
                  <p><small>{post.body}</small></p>
                  <button onClick={handlerGoBack}>Go Back</button>
                  
            </div>
      );
};

export default PostDetail;