import React, { useContext } from 'react';
import { RingContext } from '../grandpa/Grandpa';

const Aunty = () => {
    const [ring, house, setHouse] = useContext(RingContext);
    const handleHouseIncrease = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <div>
            <h2>Aunty</h2>
            <h4>House: {house}</h4>
            <p><b><i>Ring: {ring}</i></b></p>
            <button onClick={handleHouseIncrease}>Aunty Magic</button>
        </div>
    );
};

export default Aunty;