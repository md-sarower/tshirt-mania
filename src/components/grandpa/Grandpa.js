import React, { createContext, useState } from 'react';
import Aunty from '../aunty/Aunty';
import Father from '../father/Father';
import Uncle from '../uncle/Uncle';
import './Grandpa.css';


export const RingContext = createContext('ring');

const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const ornament = 'Diamond Ring';
    const ring = 'Gold Ring';

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={[ring, house, setHouse]}>
            <div className='grandpa'>
                <h2>Grandpa</h2>
                <h4>House: {house}</h4>
                <button onClick={handleBuyAHouse} className='house-button'>Buy a House</button>
                <section style={{ display: 'flex' }}>
                    <Father house={house} ornament={ornament}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;