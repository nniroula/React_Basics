import React, { useState } from 'react';

const SimpleComponent = () => {
    const [num, setNum] = useState(0);

    const clickUP = () => {
        setNum(num + 1);
    }

    return  (
        <div>
            <h3>Count: {num}</h3>
            <button onClick={clickUP}>Up</button>
        </div>
    )
}

export default SimpleComponent;