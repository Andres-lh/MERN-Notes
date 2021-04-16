import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Notes from '../Components/Notes';
import Navbar from '../Components/Navbar';
import './styles/Home.css';

function Home() {
    const history = useHistory();

    useEffect(()=>{
       const checkLogin = async () =>{
            const token = localStorage.getItem('token');
            if(token){
                const verified = await axios.get('/api/users/verify', {
                    headers: {Authorization: token}
                })
                if(verified.data === false) return localStorage.clear();
            }else{
                history.push('/auth')
            }
        }
        checkLogin();
    }, [])
    return (
        <div className = "home">
            <Navbar/>
            <Notes/>
        </div>
    )
}

export default Home
