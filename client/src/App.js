import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css'
import Login from './Components/Login';
import Notes from './Components/Notes';

function App() {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(()=>{
        const checkLogin = async () =>{
            const token = localStorage.getItem('tokenStore');
            if(token){
                const verified = await axios.get('/api/users/verify', {
                    headers: {Authorization: token}
                })
                console.log(verified.data)
                setIsLogin(verified.data);
                if(verified.data === false) return localStorage.clear();
            }else{
                setIsLogin(false);
            }
        }
        checkLogin();
    }, [])
    return(
        <div>
            {
                isLogin 
                ? <Notes /> 
                : <Login setIsLogin={setIsLogin} />
            }
        </div>
    )
}

export default App;
