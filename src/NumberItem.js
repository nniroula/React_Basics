import react from 'react';

// const NumberItem = (props) => {
const NumberItem = ({ number, remove }) => {
    // To use the remove function that comes as a prop from the parent component(NumbersList)
    const handleRemove = () => {
        remove(number)
    }
    return (
        <ul>
            {/* <button>{props.number}</button> */}
            {/* <button>{number}</button> */}
            {/* go to NumbersList and define the prop number */}
            {/* Now, implement the remove function as a prop */}
            <button onClick={handleRemove}>{number}</button>

        </ul>
    )
}

export default NumberItem;