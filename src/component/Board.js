import React, {useState} from "react";
import {Square} from "./Square";


export const Board = () => {

    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null)); // creates an array with nine elements and sets each of them to null.

    const handleClick = (i) => {
        if (squares[i]) {
            return;
        }
        const nextSquare = squares.slice(); // Immutability is important, By Making a copy of the current array
        if (xIsNext) {
            nextSquare[i] = "x";
        } else {
            nextSquare[i] = "O";
        }
        setSquares(nextSquare);
        setXIsNext(!xIsNext);
    }

    return (
        <React.Fragment>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </React.Fragment>
    );
}


const calculateWinner = (squares) => {

}