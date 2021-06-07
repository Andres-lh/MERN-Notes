import axios from 'axios';
import { SIGNIN, SIGNUP } from '../constants/actionTypes';

export const signIn = (user, history) => async(dispatch) => {
    try {
        const { data } = await axios.post('/api/users/login', user);
        dispatch({
            type: SIGNIN, 
            data
        })
        history.push('/home');
    } catch (error) {
        console.log(error);
    }
}

export const signUp = (user, history) => async(dispatch) => {
    try {
        const { data } = await axios.post('/api/users/register', user);
        dispatch({
            type: SIGNUP,
            data
        })
    } catch (error) {
        console.log(error);
    }
}
