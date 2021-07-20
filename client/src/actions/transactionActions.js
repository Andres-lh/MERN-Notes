import { FETCH_TRANSACTIONS, CREATE_TRANSACTION, DELETE_TRANSACTION } from '../constants/actionTypes';
import * as api from '../api/api';

export const getTransactions = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTransactions();
        dispatch({
            type: FETCH_TRANSACTIONS,
            data: data.transactions
        })
    } catch (error) {
        console.log(error.response.data.error)
    }
}

export const createTransaction = (transaction) => async (dispatch) => {
    try {
        const  { data }  = await api.createTransaction(transaction);
        dispatch({
            type: CREATE_TRANSACTION,
            data: data.newTransaction
        })
    } catch (error) {
        console.log(error.response.data.error)
    }
}

export const deleteTransaction = (id) => async (dispatch) => {
    try {
        await api.deleteTransaction(id);
        dispatch({
            type: DELETE_TRANSACTION,
            data: id
        })
    } catch (error) {
        console.log(error.response.data.error)
    }
}