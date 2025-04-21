import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';



const Posts = () => {

  const posts =useLoaderData();
  console.log(posts)
  return (
    <div>
      <h1>These are post</h1>
      <h2>these are my posts :{posts.length}</h2>
      <div>
      {
        posts.map( post => <Post key={post.id} post={post}>  </Post>)
      }
      </div>
      
   
    </div>
  );
};

export default Posts;<h1>These are post</h1>