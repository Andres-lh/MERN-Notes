import React, { useState } from 'react'
import NotesInput from './NotesInput';
import Note from './Note';
import { useSelector } from 'react-redux'

import './Notes.css';

function Notes() {

    const [openInput, setOpenInput] = useState(false);
    const { loading, error, notes } = useSelector((state) => state.notes);


    return (
        <div className="notes">
            {loading ? (
                    <h3>Loading...</h3>
                ) : error ? (
                    <h3>Something went wrong</h3>
                ) : (
                    <div className="notes-container">
                       {notes && notes.map((note) => (
                          <Note key={note._id} note={note} setOpenInput={setOpenInput} /> 
                       ))}
                       <i onClick={()=> setOpenInput(true)} className="button" />
                       <NotesInput openInput={openInput} setOpenInput={setOpenInput} />
                    </div>
                )
                    
                }
            
            
        </div>
    )
}

export default Notes;
