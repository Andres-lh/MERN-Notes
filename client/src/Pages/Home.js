import React, { useState, useEffect } from 'react';
import Notes from '../Components/Notes/Notes';
import Navbar from '../Components/Navbar';
import ExpenseTracker from '../Components/ExpenseTracker/ExpenseTracker';
import { getNotes } from '../actions/notesActions';
import { useDispatch, useSelector } from 'react-redux'
import './styles/Home.css';

function Home() {
    const [option, setOption] = useState('Notes');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNotes());
    },[dispatch])

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
