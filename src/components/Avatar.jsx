import { React, useState } from "react";

export const Avatar = ({ color }) => {

    return (
        <div className="align-items-center bg-dark">
            <div className="col">
                <svg width="100" height="100">
                    <circle cx="50" cy="50" r="50" fill={color} />
                </svg>
            </div>
        </div>

    )
}