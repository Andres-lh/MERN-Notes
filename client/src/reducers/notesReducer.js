import { FETCH_NOTES, FETCH_NOTES_FAIL } from '../constants/actionTypes';

const notesReducer = (state = {loading: true, notes: {}, error: null}, action) => {
    switch(action.type){
        case FETCH_NOTES:
            return { loading: false, notes: action.data, error: null }
        case FETCH_NOTES_FAIL:
            return {loading: false, notes: {}, error: action.data}
        default:
            return state;
    }
}

export default notesReducer;