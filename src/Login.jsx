import React,{ Component, useState } from "react";
import axios from "axios";
// import Pagination from "./data";
import { useNavigate } from "react-router-dom";
// localStorage.setItem("token", jwtToken);

    




export const Login = (props) =>{
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('')

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const obj = {email:email,password:pass};
    try {
        const response = await axios.post('http://localhost:5000/login', obj,{
            headers: 
            {
                'Content-Type': 'application/json'
            }
            }
            );
        console.log("Saandeeep",response.data.token);
        localStorage.setItem('token',response.data.token);
        
      } catch (error) {
        console.error(error);
      } 
    
    navigate("/data");

        
        
    
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label for="email">email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Youremail@gmail.com" id="email" name="email"/>
            <label for="password">password</label>
            <input value={pass } onChange={(e)=>setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
            <button type="submit">Login</button>
        </form>
        <button  className="link-btn" onClick={()=> props.onFormSwitch('register')}>Don't have an account? Register here</button>
        </div>
    )
};