import React, {     useState }from 'react';
import axios from 'axios';
import './styles/Login.css';

function Login({setIsLogin}) {
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
        <div className = "login-container" >
            <div className= "login">
                <h2>Login</h2>
                <form onSubmit={loginSubmit}> 
                    <div className = "login-input">
                        <input type="text" name="email" id="email" value={user.email} required onChange={onChangeInput}/>
                        <label>Email</label>
                    </div>
                    <div className="login-input"> 
                        <input type="password" name="password" id="password" value={user.password} required onChange={onChangeInput}/>
                        <label>Password</label>
                    </div>
                    <p>You don't have an account? <span> Register now</span></p> 
                    <button className="form-button" type="submit">Sign in</button>
                    <h3>{err}</h3>
                </form>
            </div>
            
            <div className="register">
                <h2>Register</h2>
                    <form onSubmit={registerSubmit}>
                    <div className = "login-input">
                            <input type="text" name="name" id="login-name" value={user.name} required onChange={onChangeInput}/>
                            <label>Email</label>
                        </div>
                        <div className = "login-input">
                            <input type="text" name="email" id="login-email" value={user.email} required onChange={onChangeInput}/>
                            <label>Email</label>
                        </div>
                        <div className="login-input"> 
                            <input type="password" name="password" id="user-password" value={user.password} required onChange={onChangeInput}/>
                            <label>Password</label>
                        </div>
                        <button className="form-button" type="submit">Sign in</button>
                        <h3>{err}</h3>
                    </form>
            </div>
        </div>
    )
}

export default Login;