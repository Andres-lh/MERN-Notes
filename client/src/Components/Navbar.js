import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar({ setOption }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const logout = () => {
        dispatch({type: 'LOGOUT'});
        window.location.reload();
        history.push('/');
    }

    return (
        <div className = "navbar">
            <ul>
                <li onClick={()=> setOption('Notes')}>Notes</li>
                <li onClick={()=> setOption('ExpenseTracker')}>Expense Tracker</li> 
            </ul>
            
            <div className = "navbar-account">
                <i onClick={logout} class="fas fa-user-circle"></i>
            </div>
            
        </div>
    )
}

export default Navbar
