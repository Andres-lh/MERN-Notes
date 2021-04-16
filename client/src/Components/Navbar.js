import React from 'react'
import './styles/Navbar.css'

function Navbar() {
    return (
        <div className = "navbar">
            <ul>
                <li>Notes</li>
                <li>Expense Tracker</li>
            </ul>
            <div className = "navbar-account">
                <i>user</i>
            </div>
            
        </div>
    )
}

export default Navbar
