import axios from 'axios';
import { get } from 'mongoose';
import { useEffect, useState } from 'react'
import Transaction from './Transaction';
import './Transactions.css'

function Transactions() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const token = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
        const getTransaction = async () => {
            const data = await axios.get('/api/transactions', {
                headers: {
                    Authorization: token
                }
            })
            setTransactions(data.data.transactions)
        }
        getTransaction();
    }, [transactions])

    return (
        <div className="tracker-container">
            <div className="transactions-wrapper" >
                {transactions.map((transaction) => {
                    return(
                        <Transaction transaction={transaction} />
                    )
                })}
            </div>  
            <div className="transactions-total">
                <p>Total: <span> {transactions.reduce((a, b) => a + b.amount, 0 )} </span></p>
                
            </div>
        </div>
    )
}

export default Transactions;
