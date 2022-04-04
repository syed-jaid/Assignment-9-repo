import React from 'react';
import './Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const Cards = ({ reviews }) => {
    const { name, reting, discription, img } = reviews

    return (
        <div className="card mx-auto my-5">
            <img className='card-img-top card-imgs ' src={img} alt="..." />
            <div className="card-body">
                <h4 className='mb-4'><span className='card-name'>Name: </span> {name}</h4>
                <p className="card-text" title={discription}>{discription.slice(0, 70)}</p>
                <p className='mt-4'>Rating :{reting} <FontAwesomeIcon className='rating-start' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='rating-start' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='rating-start' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='rating-start' icon={faStar}></FontAwesomeIcon><FontAwesomeIcon className='rating-start' icon={faStar}></FontAwesomeIcon></p>
            </div>
        </div >
    );
};

export default Cards;