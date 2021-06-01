import React, { useState }from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signIn, signUp } from '../actions/authActions';

import './styles/Auth.css';

function Login() {

    const [isSignUp, setIsSignUp] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [err, setErr] = useState('');

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]: value});

        setErr('');
    }

    const switchAuth = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignUp){
            dispatch(signUp(user, history))
        } else {
            dispatch(signIn(user, history))
        }
    }

    return(   
        <div className = "Auth-container" >
            <div className= "Auth">
                <h2>{isSignUp ? 'Register' : 'Log in'}</h2>
                <form onSubmit={handleSubmit}>
                    { isSignUp ? (
                        <>
                            <div className = "Auth-input">
                                <input type="text" name="username" id="username" value={user.username} required onChange={onChangeInput}/>
                                <label>Username</label>
                            </div>
                            <div className = "Auth-input">
                                <input type="text" name="email" id="email" value={user.email} required onChange={onChangeInput}/>
                                <label>Email</label>
                            </div>
                            <div className="Auth-input"> 
                                <input type="password" name="password" id="password" value={user.password} required onChange={onChangeInput}/>
                                <label>Password</label>
                            </div>
                        </>
                        ) : (
                            <>
                                <div className = "Auth-input">
                                    <input type="text" name="email" id="email" value={user.email} required onChange={onChangeInput}/>
                                    <label>Email</label>
                                </div>
                                <div className="Auth-input"> 
                                    <input type="password" name="password" id="password" value={user.password} required onChange={onChangeInput}/>
                                    <label>Password</label>
                                </div > 
                        </>
                        )
                    }
                    { isSignUp ? (
                        <p>Already have an account? <span onClick={switchAuth}> Log in</span></p>    
                        ) : (    
                        <p>No account yet? <span onClick={switchAuth}> Create one!</span></p>
                        )}
                    
                    <button className="form-button" type="submit">{isSignUp ? 'Create Account' : 'Log in' }</button>
                    <h3>{err}</h3>  
                </form>
            </div>


           
        </div>
    )
}

export default Login;