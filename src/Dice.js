import React, { useState } from 'react';
import NumbersList from './NumbersList';
import Die from './Die';

const Dice = ({numDice = 6, title = 'Main Game', maxVal = 20}) => {
    const [numbers, setNumbers] = useState(Array.from({length: numDice}));

    // const dice = [];
    // for(let i = 0; i< numDice; i++){
    //     const num = Math.floor(Math.random() * maxVal) + 1;
    //     dice.push(num);
    // }

    const rollDice = () => (
        setNumbers(numbers => {
            numbers.map(n => Math.floor(Math.random() * maxVal) + 1);
        })
    )
    return (
        <div>
            {/* {dice.map(num => <div>{num}</div>)} */}
            {/* {numbers.map(num => <div>{num}</div>)} */}
            {numbers.map(num => <Die val={num}/>)}
            <button onClick={rollDice}>Roll</button>
        </div>
    )
}

export default Dice;