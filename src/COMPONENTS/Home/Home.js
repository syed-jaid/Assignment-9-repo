import React from 'react';
import './Home.css'
import Nav from '../Navbar/Nav';
import img from '../img/mfile_1628229_1_L_20220110223616.jpg'
import Cards from '../Cards/Cards';
import Data from '../../get-data/Data';
import { Link } from 'react-router-dom';
const Home = () => {
    const [review] = Data()
    return (
        <div className='container mb-5'>
            <Nav></Nav>
            {/* main prat */}
            <div className='sub-div d-md-flex'>
                {/* home title  */}
                <div >
                    <h1 className='home-title home-title-color'>Find The Best Car</h1>
                    <h1 className='home-title'>Be The Proud Of Nation</h1>
                    <p className='w-75 text-start'> Britain's Rolls-Royce Motor Cars said on Monday that it enjoyed record annual sales of its luxury status symbol vehicles, as the broader sector grappled with pandemic fallout including a semiconductor shortage.</p>
                    <button className='home-btn'>See More</button>
                </div>
                {/* home img  */}
                <img className='home-img' src={img} alt="" />
            </div>
            {/* review part */}
            <h1 className='mt-5 Review-title'>Review by customer</h1>
            <div className='all-card-div  py-5'>

                {review.slice(0, 3).map(data => <Cards key={data.id} reviews={data}></Cards>)}
            </div>
            {/* all reviews button */}
            <Link className='review-show-button' to='/reviews'>Show All Reviews</Link>
        </div>
    );
};

export default Home;