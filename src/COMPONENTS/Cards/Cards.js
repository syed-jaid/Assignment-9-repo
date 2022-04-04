import React from 'react';
import './Cards.css'
const Cards = ({ reviews }) => {
    const { name, reting, discription, img } = reviews

    return (
        <div class="card mx-auto ">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h4>Name: {name}</h4>
                <p class="card-text">{discription}</p>
                <p>{reting}</p>
            </div>
        </div>
    );
};

export default Cards;