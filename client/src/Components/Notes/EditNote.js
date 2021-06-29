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
                <i onClick={()=> setEditMode(false)}>close</i>
                <div className="notesInput-card">
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <div>
                            <label>Title</label>
                            <input type="text" name="title" id="title" value={note.title} required onChange = {onChangeInput} />
                        </div>
                        <div>
                            <label>Content</label>
                            <input type="text" name="content" id="content" value={note.content} required onChange = {onChangeInput} />
                        </div>
                        <button>save</button>
                    </form>
                </div>
            </div>
    )
}

export default EditNote
