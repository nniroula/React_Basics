import React, { useState } from 'react';

const SimpleComponent = () => {
    const [num, setNum] = useState(0);

    const clickUP = () => {
        setNum(num + 1);
    }

    // increment number by 2. Simple way is num +2, but using the state another way is:
    const clickUpBy2 = () => {
        setNum(n => n + 1);
        setNum(n => n + 1);
    }

    return  (
        <div>
            <h3>Count: {num}</h3>
            <button onClick={clickUP}>Up</button>
            <br></br>
            <br></br>
            <button onClick={clickUpBy2}>UpBy2</button>
        </div>
    )
}

export default SimpleComponent;