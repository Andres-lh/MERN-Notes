import React, { useState} from 'react';
import DeleteMessage from './DeleteMessage';
import './Note.css';

function Note({note}) {  

    const [deleteMessage, setDeleteMessage] = useState(false);
    return (
        <div className = "note" >
            <div className = "noteContainer">
                <div className = "noteContent">
                    <h2>{note.title}</h2>
                    <p>{note.content}</p>
                </div>
                <div className = "noteFooter">
                    <i className="fas fa-edit edit" ></i>
                    <i className="fas fa-trash-alt delete" onClick={()=>setDeleteMessage(true)}></i>
                </div>
                {deleteMessage && <DeleteMessage id={note._id} setDeleteMessage={setDeleteMessage}/>}
            </div>
            
        </div>
    )
}

export default Note;
