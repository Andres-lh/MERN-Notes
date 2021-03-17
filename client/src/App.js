import React, { useState, useEffect } from 'react';
import Login from './Components/Login';
import Notes from './Components/Notes';

function App() {
    const [isLogin, setIsLogin] = useState(false);
    return(
        <div>
            {
                isLogin ? <Notes/> : <Login/>
            }
        </div>
    )
}

export default App;
