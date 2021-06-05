import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Notes from '../Components/Notes/Notes';
import Navbar from '../Components/Navbar';
import ExpenseTracker from '../Components/ExpenseTracker/ExpenseTracker';
import './styles/Home.css';

function Home() {
    const history = useHistory();
    const [option, setOption] = useState('Notes');
    /*useEffect(()=>{ 
       const checkLogin = async () =>{
            const user = JSON.parse(localStorage.getItem('profile'))
            
            if(user?.token){
                const verified = await axios.get('/api/users/verify', {
                    headers: {Authorization: user?.token}
                })
                if(verified.data === false) return localStorage.clear();
            }else{
                history.push('/auth')
            }
        }
        checkLogin();
    }, [history])*/

    return (
        <div className = "home">
            <Navbar setOption={setOption}/>
            {
                option === 'Notes' ? (
                    <Notes />
                ) : (
                    <ExpenseTracker/>
                )
            }
            
        </div>
    )
}

export default Home
