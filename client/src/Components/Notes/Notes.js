import React, { useState } from 'react'
import Note from './Note';
import { useSelector } from 'react-redux'

import './Notes.css';

function Notes() {

    const { loading, error, notes } = useSelector((state) => state.notes)
    console.log(error)
    return (
        <div className="notes">
            {loading ? (
                    <h3>Loading...</h3>
                ) : error ? (
                    <h3>Somethin went wrong</h3>
                ) : (
                    <div className="notes-container">
                        {notes.map((note) => (
                            <Note key={note._id} note={note} />
                        ))}
                    </div>
                )
                    
                }
            
            
        </div>
    )
}

export default Notes;
