import React from 'react';
import './Note.css';

function Note() {  

    return (
        <div className = "note" >
            <div className = "noteContainer">
                <div className = "noteContent">

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
