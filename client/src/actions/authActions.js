
import { SIGNIN, SIGNUP } from '../constants/actionTypes';
import * as api from '../api/api';

export const signIn = (user, history) => async (dispatch) => {
    try {
        const { data } = await api.login(user);
        dispatch({
            type: SIGNIN, 
            data
        })
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const signUp = (user, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(user)
        dispatch({
            type: SIGNUP,
            data
        })
        history.push('/')
    } catch (error) {
        console.log(error);
    }
}
