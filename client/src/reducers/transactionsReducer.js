import { FETCH_TRANSACTIONS, CREATE_TRANSACTION, DELETE_TRANSACTION } from '../constants/actionTypes';

const transactionsReducer = (state = {transactions: []}, action ) => {
    switch(action.type) {
        case FETCH_TRANSACTIONS:
            return {...state,  transactions : action.data}
        case CREATE_TRANSACTION:
            return {...state, transactions: [...state.transactions, action.data]}
        case DELETE_TRANSACTION:
            return {transactions: state.transactions.filter((transaction) => transaction._id !== action.data)}
        default:
            return state;
    }
}

export default transactionsReducer;