import React, { use } from 'react';

const Users2 = ({userPromise}) => {
const user= use(userPromise)
console.log("user 2 suspense data",user)

  return (
    <div>
      <h2>this is user2</h2>
    </div>
  );
};

export default Users2;