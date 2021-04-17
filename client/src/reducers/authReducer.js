import { SIGNIN, SIGNUP, LOGOUT } from '../constants/actionTypes';

const authReducer = (state = { data: null}, action) => {
    switch(action.type){
        case SIGNIN:
            localStorage.setItem('token', action?.data?.token);
            return {...state, data: action.data, loading: false, error: null};
        case SIGNUP:
            return {...state, data: action.data, loading: false, error: null}
        case LOGOUT:
            localStorage.clear();
            return {...state, data: null, loading: false, error: null}
        default:
            return state;
    }

}

export default authReducer;