import React, { useState } from 'react';

const Form = () => {
    // create initial values for the name attributes in the form fields
    const initialState = {
        username: "",
        email: "",
        password: ""
    }

    // create the states to handle many inputs, pass initial state as an empty object
    const [formData, setFormData] = useState(initialState);

    // onChange show the values
    const onInputChange = evt => {
        evt.preventDefault();
        console.log(evt.target.name); // displays username, email, and password
        console.log(evt.target.value);

        setFormData(
            // copy every thing and then update what you needed to update
            // [evt.target.name]: [evt.target.value] // this does not work, also copy pre-existing data
            data => ({...data, [evt.target.name]: [evt.target.value]})
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       const { username, email, password } = formData;
       console.log(`user name is ${username}`);
       console.log(`email is ${email}`);
       console.log(`Password is ${password}`);
    }

    return (
        <div>
            <form>
                <label htmlFor="user"> Username:</label>
                <input 
                    type="text"
                    id="user" 
                    value={formData.username} 
                    placeholder="user name"
                    onChange={onInputChange}
                    name="username"
                />

                <label htmlFor="email"> Email:</label>
                <input 
                    type="email"
                    id="email" 
                    value={formData.email} 
                    placeholder="user email"
                    onChange={onInputChange}
                    name="email"
                />

                <label htmlFor="password"> Password:</label>
                <input 
                    type="password"
                    id="password" 
                    value={formData.password} 
                    placeholder="user password"
                    onChange={onInputChange}
                    name="password"
                />

                <button onClick={handleSubmit} type="button">Submit</button>
            </form>
        </div>
    )

}

export default Form;