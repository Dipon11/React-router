import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
  
  const user= useLoaderData();
 
const {website, name}=user;  
  return (
    <div>
<h3>User details here</h3>

<h1>{name}</h1>
<p>{website}</p>
    </div>
  );
};

export default UserDetails;