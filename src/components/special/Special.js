import React, { useContext } from 'react';
import { RingContext } from '../grandpa/Grandpa';

const Special = ({ ornament }) => {
    const [ring, house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h5>Special</h5>
            <p>Gift: <i><b>{ornament}</b></i></p>
            <p>Gift2: <i><b>{ring}</b></i></p>
            <p>House: <i><b>{house}</b></i></p>
            <button onClick={() => setHouse(house + 1)}  >Buy a House</button>
        </div>
    );
};

export default Special;