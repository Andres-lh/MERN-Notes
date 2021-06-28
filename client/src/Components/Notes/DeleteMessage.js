import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteNote } from '../../actions/notesActions';

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
        <div>
            <h1>Are you sure you want to delete this note? </h1>
            <button onClick={()=> deleteMyNote(id)}>Yes</button>
            <button onClick={()=> setDeleteMessage(false)}>Cancel</button>

        </div>
    )
}

export default DeleteMessage
