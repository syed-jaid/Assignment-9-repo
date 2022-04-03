import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <h1>not found</h1>
            <Link to='/'>go back to home</Link>
        </div>
    );
};

export default Notfound;