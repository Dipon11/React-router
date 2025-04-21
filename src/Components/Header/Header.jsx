import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
  return (
    <div>
<h3> THis is header</h3>
<nav>
 <NavLink to="/">Home</NavLink>
 <NavLink to="/mobiles">Mobiles</NavLink>
 <NavLink to="/laptops">Laptops</NavLink>
 <NavLink to="/users">Users</NavLink>
 <NavLink to="/users2">Users2</NavLink>
 <NavLink to="/posts">Posts</NavLink>
</nav>
    </div>
  );
};

export default Header;