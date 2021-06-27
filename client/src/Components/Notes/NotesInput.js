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
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        { openInput && (
            <div  className="notesInput">
                <i onClick={() => setOpenInput(false)}>close</i>
                <div className="notesInput-card">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Title</label>
                            <input type="text" name="title" id="title" value={note.title} required onChange={onChangeInput} />
                        </div>
                        <div>
                            <label>Content</label>
                            <input type="text" name="content" id="content" value={note.content} required onChange={onChangeInput} />
                        </div>
                        <button>create note</button>
                    </form>
                </div>
            </div>
        )   
        }
        
        </>
    )
}

export default NotesInput;
