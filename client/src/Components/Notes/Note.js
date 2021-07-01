import React, { useState} from 'react';
import DeleteMessage from './DeleteMessage';
import EditNote from './EditNote';
import './Note.css';

function Note({note}) {  

    const [deleteMessage, setDeleteMessage] = useState(false);
    const [editMode, setEditMode] = useState(false);

    return (
        <div className = "note" >
            <div className = "noteContainer">
                <h2>{note.title}</h2>
                <div className = "noteContent">
                    <p>{note.content}</p>
                </div>
                <div className = "noteFooter">
                    <i className="fas fa-edit edit" onClick={()=> setEditMode(true)} ></i>
                    <i className="fas fa-trash-alt delete" onClick={()=>setDeleteMessage(true)}></i>
                </div>
                {deleteMessage && <DeleteMessage id={note._id} setDeleteMessage={setDeleteMessage}/>}
                {editMode && <EditNote title={note.title} id={note._id} content={note.content} setEditMode={setEditMode} />}
            </div>
            
        </div>
    )
}

export default Note;
