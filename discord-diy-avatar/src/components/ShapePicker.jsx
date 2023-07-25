import React, { useState } from 'react';

export const ShapePicker = ({ shape, setShape }) => {
    //const [shape, setShape] = useState('circle');

    const handleChange = (event) => {
        setShape(event.target.value);
    }
    
    return (
        <div>
            <select value={shape} onChange={handleChange}>
                <option value="circle">Circle</option>
                <option value="square">Square</option>
            </select>
        </div>

    );
};

