import { React, useState } from 'react'

export const ShapeChooser = ({ color, setColor }) => {

    const handleChange = (event) => {
        setColor(event.target.value);
    }

    return (
        <div className="col-md-6 col-sm-6 color-chooser      align-items-center bg-secondary">
            <div className='w-100 p-3'> 
                <h3>Body</h3>
                <div className="bg-options">
                    <div className="selectable-items"></div>
                    <div className="selectable-items"></div>
                    <div className="selectable-items"></div>
                    <div className="selectable-items"></div>
                    <div className="selectable-items"></div>
                    <div className="selectable-items"></div>
                    <div className="selectable-items"></div>
                    <div className="selectable-items"></div>
                </div>
            </div>
        </div>
    )
}