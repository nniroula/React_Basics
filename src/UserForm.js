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

    return (
        // <form>
        //     <input type="text" placeholder="username" />
        //     <button>Sign Up</button>
        // </form>

        // React way
        <form>
            {/* <input type="text" placeholder="username" value={username}/> */}
            {/* add onChange attribute to make input field editable */}
            <input type="text" placeholder="username" value={username} onChange={handleChange}/>
            <button>Sign Up</button>
        </form>
    )
}

export default UserForm;