import { FETCH_NOTES } from '../constants/actionTypes';
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
