import React from 'react';
import Data from '../../get-data/Data';
import Nav from '../Navbar/Nav';
import Cards from '../Cards/Cards'
import './Reviews.css'
const Reviews = () => {
    const [review] = Data()
    return (
        <div>
            <Nav></Nav>
            <h1 className='my-5 Review-title'> Reviews</h1>
            <div className='all-card-div mb-5'>
                {
                    review.map(data => <Cards key={data.id} reviews={data}></Cards>)
                }
            </div>
        </div>
    );
};

export default Reviews;