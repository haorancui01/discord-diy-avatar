import React, { useState } from 'react';

export const SelectableList = ({selected_bg_color, set_selected_bg_color}) => {
    
    const bg_colors = [
        'red', 'blue', 'green', 'yellow', 'purple'
    ];


    const handleClick = (bg_color) => {
        set_selected_bg_color(bg_color)
    } 

    return (
        <div>
            {bg_colors.map((bg_color, index) => (
                <div
                    key={index}
                    onClick={() => handleClick(bg_color)}
                    style={{
                        cursor: 'pointer',
                        backgroundColor: bg_color === selected_bg_color ? 'lightblue' : 'white'
                    }}
                >
                    {bg_color}
                </div>
            ))}
        </div>
    )
}