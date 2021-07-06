import { useSelector } from 'react-redux'

function ErrorMessage() {
    const { error } = useSelector((state) => state.auth);
    console.log(error)
    if(!error) return null
    
    return (
        <div>
            <h3>{error}</h3>
        </div>
    )
}

export default ErrorMessage;
