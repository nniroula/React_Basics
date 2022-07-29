import React, {useState} from 'react';

/**
 * 
 * click on each number should remove that number
 */

const NumbersList = () => {
    const [numbers, setNumbers] = useState([2, 5, 7, 9, 11, 13]);

    const remove = (number) => {
        console.log("removing ", number);
        // To remove use the filter method
        setNumbers(numbers.filter(n => n!= number));
    }
    return (
        <ul>
            {/* {numbers.map(n => (<li> <button>{n}</button> </li>))} */}
            {numbers.map(n => (<li> <button onClick={() => remove(n)}>{n}</button> </li>))}
        </ul>
    )
}

export default NumbersList;