import React from 'react';
import Brother from '../brother/Brother';
import Mother from '../mother/Mother';
import MySelf from '../mySelf/MySelf';
import Sister from '../sister/Sister';

const Father = ({ house, ornament }) => {
    return (
        <div>
            <h2>Father</h2>
            <h4>House: {house}</h4>
            <div style={{ display: 'flex' }}>
                <Mother house={house}></Mother>
                <MySelf house={house} ornament={ornament}></MySelf>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;