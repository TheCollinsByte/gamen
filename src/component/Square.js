import React, {useState} from "react";

export const Square = ({ value }) => {

    function handleClick() {
        console.log(value);
    }

    return (
        <button
            className="square"
            onClick={handleClick}
        >
            {value}
        </button>
    );
}

