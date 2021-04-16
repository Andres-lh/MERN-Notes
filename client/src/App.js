import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
import Auth from './Components/Auth';


function App() {

    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/auth' component = {Auth}/>
            </Switch>
        </Router>
    )
}

export default App;
