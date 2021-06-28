import { FETCH_NOTES, CREATE_NOTE, DELETE_NOTE } from '../constants/actionTypes';
import * as api from '../api/api';

export const getNotes = () => async (dispatch) =>{
    try {
        const { data } = await api.fetchNotes();
        dispatch({
            type: FETCH_NOTES,
            data
        })
    } catch (error) {
        console.log(error)
    }
}

export const createNote = (note) => async(dispatch) => {
    try {
        console.log(note)
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
