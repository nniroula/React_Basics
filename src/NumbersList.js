import React, {useState} from 'react';
import NumberItem from './NumberItem';

/**
 * 
 * click on each number should remove that number
 */

const NumbersList = () => {
    const [numbers, setNumbers] = useState([2, 5, 7, 9, 11, 13]);

    // pass remove funcion as prop to the child component
    const remove = (number) => {
        console.log("removing ", number);
        // To remove use the filter method
        setNumbers(numbers.filter(n => n!= number));
    }
    return (
        <ul>
            {/* {numbers.map(n => (<li> <button>{n}</button> </li>))} */}
            {/* {numbers.map(n => (<li> <button onClick={() => remove(n)}>{n}</button> </li>))} */}

            {/* define the prop to pass to another component */}

            {numbers.map(n => <NumberItem number={n} remove={remove} />)}
        </ul>
    )
}

export default NumbersList;