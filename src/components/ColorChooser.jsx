import { React, useState } from 'react'
import { SelectableList } from './SelectableList';

export const ColorChooser = ({set_selected_bg_color }) => {



    const handleChange = (event) => {
        setColor(event.target.value);
    }

    return (
        <div className="col-md-6 col-sm-6 color-chooser align-items-center bg-secondary">
            <div className='w-100 p-3'> 
                <h3>Background</h3>
                <div className="bg-options">
                    <SelectableList set_selected_bg_color={set_selected_bg_color}/>
                </div>
            </div>
        </div>
    )
}