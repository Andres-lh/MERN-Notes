import { SIGNIN, SIGNIN_FAILURE, SIGNUP, SIGNUP_FAILURE , LOGOUT } from '../constants/actionTypes';

const authReducer = (state = { data: null}, action) => {
    switch(action.type){
        case SIGNIN:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));  
            return {...state, data: action.data, loading: false, error: null};
        case SIGNIN_FAILURE:
            return{...state, data: null, loading: false, error: action.error}
        case SIGNUP:
            console.log(action.data)
            return {...state, data: action.data, loading: false, error: null}
        case LOGOUT:
            localStorage.clear();
            return {...state, data: null, loading: false, error: null}
        default:
            return state;
    }

}

export default authReducer;