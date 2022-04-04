import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
const Nav = () => {
    return (
        <div className='nav-main-div'>
            {/* all links for route */}
            <Link className='nav-links' to='/'>Home</Link>
            <Link className='nav-links' to='/reviews'>All Reviews</Link>
            <Link className='nav-links' to='/dashboard'>Dashborad</Link>
            <Link className='nav-links' to='/blogs'>Blogs</Link>
        </div>
    );
};

export default Nav;