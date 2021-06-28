import { CREATE_NOTE, FETCH_NOTES, FETCH_NOTES_FAIL, DELETE_NOTE } from '../constants/actionTypes';

const notesReducer = (state = {loading: true, notes: [], error: null}, action) => {
    switch(action.type){
        case FETCH_NOTES:
            return { loading: false, notes: action.data, error: null }
        case FETCH_NOTES_FAIL:
            return {loading: false, notes: [], error: action.data}
        case CREATE_NOTE: 
            return {loading: false,  notes: [...state.notes, action.data], error: null}
        case DELETE_NOTE: 
            return {
                loading: false,  
                notes: state.notes.filter((note) => note._id !== action.data), 
                error: null
            }
        default:
            return state;
    }
}

export default notesReducer;