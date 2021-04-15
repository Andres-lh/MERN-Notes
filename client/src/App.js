import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css'
import Auth from './Components/Auth';
import Notes from './Components/Notes';

function App() {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(()=>{
        const checkLogin = async () =>{
            const token = localStorage.getItem('token');
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
                : <Auth setIsLogin={setIsLogin} />
            }
        </div>
    )
}

export default App;
