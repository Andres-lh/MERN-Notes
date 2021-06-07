import React from 'react';
import Auth from '../Components/Auth';
import './styles/LandingPage.css'

function LandingPage() {
    return (
        <div className = "LandingPage">
            <Auth />
            <h1 className="LandingPage-title">keep your notes organized in just one place</h1>
        </div>
    )
}

export default LandingPage
