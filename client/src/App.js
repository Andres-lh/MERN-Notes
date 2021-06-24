import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
import Auth from './Components/Auth';
import PrivateRoute from './Components/routing/PrivateRoute';

function App() {

    return(
        <Router>
            <Switch>
                <PrivateRoute exact path='/' component={Home}/>
                <Route exact path='/login' component = {Auth}/>
            </Switch>
        </Router>
    )
}

export default App;
