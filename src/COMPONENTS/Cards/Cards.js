import React from 'react';
import './Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareFromSquare, faStar } from '@fortawesome/free-solid-svg-icons'
const Cards = ({ reviews }) => {
    const { name, reting, discription, img } = reviews

    return (
        <div class="card mx-auto ">
            <img className='card-img-top card-imgs' src={img} alt="..." />
            <div class="card-body">
                <h4 className='mb-4'>Name: {name}</h4>
                <p class="card-text">{discription.slice(0, 80)}</p>
                <p className='mt-4'>Rating :{reting} <FontAwesomeIcon className='rating-start' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='rating-start' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='rating-start' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='rating-start' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='rating-start' icon={faStar}></FontAwesomeIcon></p>
            </div>
        </div >
    );
};

export default Cards;