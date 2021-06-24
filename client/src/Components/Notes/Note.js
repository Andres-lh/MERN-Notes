import React from 'react';
import './Note.css';

function Note({note}) {  

    return (
        <div className = "note" >
            <div className = "noteContainer">
                <div className = "noteContent">
                    {note.title}
                </div>
                <div className = "noteFooter">
                    <i className="fas fa-edit edit" ></i>
                    <i className="fas fa-trash-alt delete" ></i>
                </div>
            </div>
            
        </div>
    )
}

export default Note;
