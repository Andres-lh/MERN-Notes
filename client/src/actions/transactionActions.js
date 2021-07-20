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