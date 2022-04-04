import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <h1 className='mt-5 py-5'>Not Found  404</h1>
            <Link className='px-5 py-2 bg-info text-white rounded-pill' to='/'>Go Back To Home</Link>
        </div>
    );
};

export default Notfound;