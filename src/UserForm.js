import React, { useState } from 'react';
// This is vaniall JS, and const inpt = document.querySelector('input), inpt.value;
const UserForm = () => {
    const [username, setUsername] = useState("nabin");
    // setUsername("Nabin"); // if this is used the form won't be rendered.
    const handleChange = (event) => {
        // set this to the changed value using useState
        console.log( event.target.value);
        setUsername(event.target.value) 
       
    }

    // on button click
    const handleClick = (e) => {
        e.preventDefault();
        // setUsername(e.target.value) // if used this line, state is not preserved.
     
    }

    return (
        // <form>
        //     <input type="text" placeholder="username" />
        //     <button>Sign Up</button>
        // </form>

        // React way
        // <form>
        <form onSubmit={handleClick}>
            {/* <input type="text" placeholder="username" value={username}/> */}
            {/* add onChange attribute to make input field editable */}
            <input type="text" placeholder="username" value={username} onChange={handleChange}/>
            {/* <button onClick={handleClick}>Sign Up</button> */}
            {/* OR use the onSubmit with form  */}
            <button>Sign Up</button>
        </form>
    )
}

export default UserForm;