import React, { useState } from 'react';
import { createNote } from '../../actions/notesActions';
import { useDispatch } from 'react-redux'

import './NotesInput.css';

function NotesInput({openInput, setOpenInput}) {
    const dispatch = useDispatch();

    const [note, setNote] = useState({
        title:'',
        content: ''
    })

    const onChangeInput = (e) => {
        const {name, value} = e.target;
        setNote({...note, [name]: value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            dispatch(createNote(note));
            setOpenInput(false)
            setNote({
                title: '',
                content: ''
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        { openInput && (
            <div  className="notesInput">
                <div className="notesInput-card">
                    <form onSubmit={handleSubmit} autoComplete="off" className="notesInput-form">
                        <div className="notesInput-input">
                            <input type="text" name="title" id="title" value={note.title} required onChange={onChangeInput} placeholder="Title" />
                        </div>
                        <div className="notesInput-input">
                            <textarea name="content" id="content" cols="30" rows="10" value={note.content} required onChange={onChangeInput} placeholder="Content"></textarea>
                        </div>
                        <button>Create note</button>
                        <button onClick={() => {
                            setOpenInput(false) 
                            setNote({
                                title: '',
                                content: ''
                            })
                        }}>Cancel</button>
                        </form>
                </div>
            </div>
        )   
        }
        
        </>
    )
}

export default NotesInput;
