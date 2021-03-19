import React from 'react';
import Notes from './Notes';
import './styles/Login.css';

function Login() {
    return(
        <div className = "login-container" >
            <div className= "login">
                <h2>Login</h2>
                <form>
                    <div className = "login-input">
                        <input type="text" name="email" id="login-email" required/>
                        <label>Email</label>
                    </div>
                    <div className="login-input"> 
                        <input type="password" name="password" id="user-password" required/>
                        <label>Password</label>
                    </div>
                    <button type="submit">Sign in</button>
                </form>
            </div>
            
            <div>
                 
            </div>
        </div>
    )
}

export default Login;