import React, { useState, useEffect } from 'react'
import Note from './Note';
import * as api from '../../api/api';
import './Notes.css';

function Notes() {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        try {
            const fetch = async () => {
                const data = await api.getNotes();
                setNotes(data.data)
                
            }
            fetch();
        } catch (error) {
            console.log(error.response)
        }
       
    }, [])

    console.log(notes)

    return (
        <div className="notes">
            <div className="notes-container">
                <Note/>
                
            </div>
            
        </div>
    )
}

export default Notes;
