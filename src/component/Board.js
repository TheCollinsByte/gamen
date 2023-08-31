import React, {useState} from "react";
import {Square} from "./Square";


export const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null)); // creates an array with nine elements and sets each of them to null.

    const handleClick = (i) => {
        const nextSquare = squares.slice();
        nextSquare[i] = "X";
        setSquares(nextSquare)
    }

    return (
        <React.Fragment>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={handleClick} />
                <Square value={squares[1]} onSquareClick={handleClick} />
                <Square value={squares[2]} onSquareClick={handleClick} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={handleClick} />
                <Square value={squares[4]} onSquareClick={handleClick} />
                <Square value={squares[5]} onSquareClick={handleClick} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={handleClick} />
                <Square value={squares[7]} onSquareClick={handleClick} />
                <Square value={squares[8]} onSquareClick={handleClick} />
            </div>
        </React.Fragment>
    );
}