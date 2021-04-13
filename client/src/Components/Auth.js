import React, { useState }from 'react';
import axios from 'axios';
import './styles/Login.css';

function Login({setIsLogin}) {

    const [isSignUp, setIsSignUp] = useState(false);
    
    const [user, setUser] = useState({
        name: '',
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

    const loginSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/users/login', {
                email: user.email,
                password: user.password
            })
            setUser({name: '', email: '', password: ''})
            localStorage.setItem('tokenStore', res.data.token);
            setIsLogin(true)
        } catch (err) {
            err.response.data.msg && setErr(err.response.data.msg)
        }
    }

    const registerSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/users/register', {
                username: user.name,
                email: user.email,
                password: user.password
            })
            setUser({name: '', email: '', password: ''})
            setErr(res.data.msg);
        } catch (err) {
            err.response.data.msg && setErr(err.response.data.msg)
        }
    }

    return(   
        <div className = "Auth-container" >
            <div className= "Auth">
                <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
                <form onSubmit={loginSubmit}>
                    { isSignUp ? (
                        <>
                            <div className = "Auth-input">
                                <input type="text" name="name" id="name" value={user.name} required onChange={onChangeInput}/>
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
                        <p>Already have an account? <span onClick={switchAuth}> Sign In</span></p>    
                        ) : (    
                        <p>You don't have an account? <span onClick={switchAuth}> Register now!</span></p>
                        )}
                    
                    <button className="form-button" type="submit">{isSignUp ? 'Sing Up' : 'Sign In'}</button>
                    <h3>{err}</h3>  
                </form>
            </div>


           
        </div>
    )
}

export default Login;