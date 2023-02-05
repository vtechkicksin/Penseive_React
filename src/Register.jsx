import React, { useState } from "react";
import axios from "axios";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [passwordConfirm,setpasswordConfirm] = useState('');

    

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("Email");
        const obj = {name: name, email: email, password: pass, passwordConfirm: passwordConfirm,}
    try {
        const response = await axios.post('http://localhost:5000/auth/register', obj,{
            headers: 
            {
                'Content-Type': 'application/json'
            }
        }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
      
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label htmlFor="passwordConfirm">password</label>
            <input value={passwordConfirm} onChange={(e) => setpasswordConfirm(e.target.value)} type="password" placeholder="********" id="password" name="passwordConfirm" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}