import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteNote } from '../../actions/notesActions';
import './DeleteMessage.css';

function DeleteMessage({id, setDeleteMessage}) {
    const dispatch = useDispatch();

    const deleteMyNote = async (id) => {
        if(id){
            try {
                dispatch(deleteNote(id));
            } catch (error) {
                console.log(error)
            }  
        }
    }   
    return (
        <div className="DeleteMessage">
            <div className="DeleteMessage-container">
                <h1>Delete note? </h1>
                <div>
                    <button onClick={()=> deleteMyNote(id)}>Yes</button>
                    <button onClick={()=> setDeleteMessage(false)}>Cancel</button>
                </div>   
            </div>
        </div>
    )
}

export default DeleteMessage
