import React, { useState } from 'react';
import useTShirts from '../../hooks/useTShirts';
import Cart from '../cart/Cart';
import Tshirts from '../tShirt/Tshirts';
import './Home.css';

const Home = () => {
    const [tShirts, setTShirts] = useTShirts();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(tShirt => tShirt.id === selectedItem.id);
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else {
            alert('Item already added');
        }
    }

    const handleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tShirt => tShirt.id !== selectedItem.id);
        setCart(rest);
    }


    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt =>
                        <Tshirts
                            key={tShirt.id}
                            tShirt={tShirt}
                            handleAddToCart={handleAddToCart}
                        ></Tshirts>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;