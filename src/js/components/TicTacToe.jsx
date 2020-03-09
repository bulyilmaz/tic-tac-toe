import React, { Fragment, useState, useEffect } from "react";

import TicTacToeCell from "./TicTacToeCell.jsx";

const TicTacToe = () => {
    const [lastChoise, setLastChoise] = useState("");
    const [finished, setFinished] = useState(false);
    const initialCells = [];

    for (let i = 1; i < 10; i++) {
        initialCells[`cell${i}`] = "";
    }

    const [cells, setCells] = useState(initialCells);
    const handleChoise = (name, choise) => {
        cells[name] = choise;
        setCells(cells);
        setLastChoise(choise);
    };
    const checkResult = () => {
        if (
            (cells["cell1"] === "X" && cells["cell2"] === "O" && cells["cell3"] === "X")
            ||
            (cells["cell4"] === "X" && cells["cell5"] === "O" && cells["cell6"] === "X")
            ||
            (cells["cell7"] === "X" && cells["cell8"] === "O" && cells["cell9"] === "X")
            ||
            (cells["cell1"] === "X" && cells["cell4"] === "O" && cells["cell7"] === "X")
            ||
            (cells["cell2"] === "X" && cells["cell5"] === "O" && cells["cell8"] === "X")
            ||
            (cells["cell3"] === "X" && cells["cell6"] === "O" && cells["cell9"] === "X")
            ||
            (cells["cell1"] === "X" && cells["cell5"] === "O" && cells["cell9"] === "X")
            ||
            (cells["cell3"] === "X" && cells["cell5"] === "O" && cells["cell7"] === "X")
        ) {
            setFinished(true);
        }
    };

    useEffect(() => {
        checkResult();
    }, [lastChoise]);

    return (
        <Fragment>
            <p>{finished ? "Game over!" : ""}</p>
            { !finished ? (
                <div className="board">
                    { Array.apply(1, Array(9)).map((x, i) => (
                        <TicTacToeCell key={i + 1} className={`cell${i + 1}`} name={`cell${i + 1}`} handleChoise={handleChoise} lastChoise={lastChoise}/>
                    )) }
                </div>
            ) : null }
        </Fragment>

    );
};

export default TicTacToe;