import { combineReducers } from 'redux';
import authReducer from './authReducer';
import notesReducer from './notesReducer';

export default combineReducers({auth: authReducer, notes: notesReducer})