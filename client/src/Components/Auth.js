import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signIn, signUp } from '../actions/authActions';
import { GoogleLogin } from 'react-google-login';
import './styles/Auth.css';

const Client_Id = process.env.REACT_APP_GOOGLE_ID;

function Login() {

    const [isSignUp, setIsSignUp] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if(localStorage.getItem('profile')){
            history.push('/');
        }
    }, [history])
    
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
        console.log(user)
        if(isSignUp){
            dispatch(signUp(user, history))
        } else {
            dispatch(signIn(user, history))
        }
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: "SIGNIN", data: { result, token }});
            history.push('/')
        } catch (err) {
            console.log(err)
        }
    }

    const googleFailure = () => {
        console.log("Google Sign In wan unsuccessful. Try again later...")
    }


    return(   
        <div className = "Auth-container" >
            <h1 className="Auth-title">keep your notes organized in just one place</h1>
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
                        <>
                            <p>Already have an account? <span onClick={switchAuth}> Log In</span></p>
                            
                        </>
                        
                        
                        ) : (  
                        <> 
                            <p>No account yet? <span onClick={switchAuth}> Create one!</span></p>
                        </>
                        )}

                        <div>
                            <button className="form-button" type="submit">{isSignUp ? 'Create Account' : 'Log In' }</button>
                        </div>
                        {!isSignUp && 
                        <>
                            <GoogleLogin 
                                clientId = {Client_Id} 
                                render = {(renderProps) => {
                                    return <button className="form-button" type="submit" onClick={renderProps.onClick} disabled={renderProps.disabled}> <i class="fab fa-google"></i> Continue with google</button>
                                }}
                                onSuccess = {googleSuccess}
                                onFailure = {googleFailure}
                                cookiePolicy = "single_host_origin"
                                />
                                
                        </>
                        }
                    <h3>{err}</h3>  
                </form>
            </div>


           
        </div>
    )
}

export default Login;