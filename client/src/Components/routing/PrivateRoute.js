import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({component: Component, ...rest}) {

    return(
        <Route 
            {...rest}
            render = {(props) => 
                localStorage.getItem("profile") ? (
                    <Component {...props} />
                ) : (
                <   Redirect to = '/login' />
            )
            }
        
        />
    )
}

export default PrivateRoute;