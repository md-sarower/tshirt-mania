import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {

    // Conditional rendering options

    // 1. ||
    // 2. Element variable
    // 3. && Operator (Short hand) 
    // 4. Ternary operator

    let command;
    if (cart.length === 0) {
        command = <p><b>Please! add at least 1 item!!</b></p>
    }
    else if (cart.length === 1) {
        command = <p><i>Please, add 1 more to get 25% Discount</i></p>
    }
    else {
        command = <p><small><i>Thanks for choosing item</i></small></p>
    }

    return (
        <div>
            <h2>Selected Item: {cart.length}</h2>
            {
                cart.map(tShirt =>
                    <p><b>{tShirt.name}
                        <button onClick={() => handleRemoveFromCart(tShirt)}>X
                        </button>
                    </b></p>)
            }
            {cart.length === 0 || <p className='shortHand-operator2'><i><b>YAY! Your are buying!</b></i></p>}

            {command}

            {cart.length === 3 && <div className='shortHand-operator'>
                <p><i><b>Thank You, You have selected 3 Items</b></i></p>
            </div>}

            {cart.length !== 4 ? <p><i>Keep adding Items...</i></p> : <button>Clear All</button>}
            {cart.length === 4 && <button>Review Order</button>}
            
        </div>
    );
};

export default Cart;