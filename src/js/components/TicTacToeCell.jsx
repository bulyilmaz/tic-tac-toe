import React, { useState } from "react";

const TicTacToeCell = props => {
    const [choise, setChoise] = useState("");
    const {
        name,
        handleChoise,
        lastChoise
    } = props;
    const handleClick = () => {
        if (choise !== "") {
            return;
        }

        let currentChoise;

        if (lastChoise === "") {
            currentChoise = "X";
        } else if (lastChoise === "X") {
            currentChoise = "O";
        } else {
            currentChoise = "X";
        }

        setChoise(currentChoise);
        handleChoise(name, currentChoise);
    };

    return (
        <div className="cell" onClick={handleClick}>{choise}</div>
    );
};

export default TicTacToeCell;