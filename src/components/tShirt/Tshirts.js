import React from 'react';
import './Tshirts.css';

const Tshirts = ({ handleAddToCart, tShirt }) => {
    const { name, price, picture } = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <h4>Price: ${price}</h4>
            <button onClick={() => handleAddToCart(tShirt)}>Add to Cart</button>
        </div>
    );
};

export default Tshirts;