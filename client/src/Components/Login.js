import React from 'react';
import Notes from './Notes';

function Login() {
    return(
        <div>
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="email" id="login-email" placeholder="email" required/>
                    <input type="password" name="password" id="user-password" placeholder="password" required/>
                    <button type="submit">Login</button>
                </form>
            </div>
            
            <div>
                <h2>Register</h2>  
            </div>
        </div>
    )
}

export default Login;