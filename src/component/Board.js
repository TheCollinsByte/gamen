import React, {useState} from "react";
import {Square} from "./Square";


export const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null)); // creates an array with nine elements and sets each of them to null.

    return (
        <React.Fragment>
            <div className="board-row">
                <Square value={squares[0]} />
                <Square value={squares[1]} />
                <Square value={squares[2]} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} />
                <Square value={squares[4]} />
                <Square value={squares[5]} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} />
                <Square value={squares[7]} />
                <Square value={squares[8]} />
            </div>
        </React.Fragment>
    );
}