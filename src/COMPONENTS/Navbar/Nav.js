import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <h1>nav</h1>
            <Link to='/'>Home</Link>
            <Link to='/reviews'>Reviews</Link>
            <Link to='/dashboard'>Dashborad</Link>
            <Link to='/blogs'>Blogs</Link>
        </div>
    );
};

export default Nav;