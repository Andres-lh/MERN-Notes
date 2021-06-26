import React from 'react';

import './NotesInput.css';

function NotesInput({openInput, setOpenInput}) {

    return (
        <>
        { openInput && (
            <div  className="notesInput">
                <div className="notesInput-card">
                    <i onClick={() => setOpenInput(false)}>close</i>
                </div>
            </div>
        )   
        }
        
        </>
    )
}

export default NotesInput;
