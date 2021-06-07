import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';

function App() {

    return(
        <Router>
            <Switch>
                <Route exact path='/Home' component={Home}/>
                <Route exact path='/' component = {LandingPage}/>
            </Switch>
        </Router>
    )
}

export default App;
