import axios from 'axios';
import { useEffect, useState } from 'react'

function Transactions() {
    const [transaction, setTransaction] = useState({});

    useEffect(() => {
        const token = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
        const getTransaction = async () => {
            const data = await axios.get('/api/transactions', {
                headers: {
                    Authorization: token
                }
            })
            setTransaction(data.data.transactions)
        }

        getTransaction();
    }, [])


    return (
        <div className="tracker-container">

        </div>
    )
}

export default Transactions;
