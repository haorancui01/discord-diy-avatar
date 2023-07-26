import React, { useState } from 'react';

export const ShapePicker = ({ shape, setShape }) => {
    //const [shape, setShape] = useState('circle');

    const handleChange = (event) => {
        setShape(event.target.value);
    }

    return (
        <div className='col-md-12 col-sm-12 color-chooser align-items-center bg-primary'>
            <div className='justify-content-center' >
                <select className='round-select' value={shape} onChange={handleChange}>
                    <option value="circle">Circle</option>
                    <option value="square">Square</option>
                </select>
            </div>
        </div>

    );
};

