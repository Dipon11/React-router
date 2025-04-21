import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
const {id,title} =post;
const navigate =useNavigate();
const handleNavigate =() =>{
navigate('/laptops')
}
  return (
    <div>
      <h1>I am post</h1>

      <h3>{title}</h3>
      <Link to={`/posts/${id}`}>
      <button>Show details</button> </Link>

      <button onClick={handleNavigate}>Details Of :{id}</button>
    </div>
  );
};

export default Post;