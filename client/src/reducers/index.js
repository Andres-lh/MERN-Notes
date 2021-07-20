import { combineReducers } from 'redux';
import authReducer from './authReducer';
import notesReducer from './notesReducer';
import transactionsReducer from './transactionsReducer'

export default combineReducers({auth: authReducer, notes: notesReducer, transactions: transactionsReducer});