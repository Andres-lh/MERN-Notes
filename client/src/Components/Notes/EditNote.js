import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editNote} from '../../actions/notesActions'
function EditNote({title, id, content, setEditMode}) {
    const dispatch = useDispatch();
    const [note, setNote] = useState({
        title: title,
        content: content,
    })

    const onChangeInput = (e) => {
        const {name, value} = e.target;
        setNote({...note, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            dispatch(editNote(id, note));
            window.location.reload();
            setEditMode(false)
            setNote({
                title: '',
                content: ''
            })
            
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
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
                <button onClick={() => setEditMode(false)}>Cancel</button>
                </form>
        </div>
    </div>
    )
}

export default EditNote
