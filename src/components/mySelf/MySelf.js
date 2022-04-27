import React from 'react';
import Special from '../special/Special';

const MySelf = ({ house, ornament }) => {
    return (
        <div>
            <h2>This is Me</h2>
            <p><small>House: {house}</small></p>
            <Special ornament={ornament}></Special>
        </div>
    );
};

export default MySelf;