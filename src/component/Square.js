import React from "react";

export const Square = ({ value, onSquareClick }) => {

    // value prop that will either be 'X', 'O', or null for empty squares.

    return (
        <button
            className="square"
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
}

