import { FETCH_NOTES, CREATE_NOTE, DELETE_NOTE, UPDATE_NOTE } from '../constants/actionTypes';
import * as api from '../api/api';

export const getNotes = () => async (dispatch) =>{
    try {
        const { data } = await api.fetchNotes();
        console.log(data)
        dispatch({
            type: FETCH_NOTES,
            data : data.notes
        })
    } catch (error) {
        console.log(error)
    }
}

export const createNote = (note) => async(dispatch) => {
    try {
        const { data } = await api.createNote(note)
        dispatch({
            type: CREATE_NOTE,
            data
        })
    } catch (error) {
        console.log(error)
    }    
 }

export const deleteNote = (id) => async(dispatch) => {
    try {
        await api.deleteNote(id);
        dispatch({
            type: DELETE_NOTE,
            data: id
        })
    } catch (error) {
        console.log(error)
    }
}

export const editNote = (id, updatedNote) => async(dispatch) => {
    try {
        console.log(id, updatedNote)
        const { data } = await api.updateNote(id, updatedNote);
        dispatch({
            type: UPDATE_NOTE,
            data
        })
    } catch (error) {
        
    }
}
