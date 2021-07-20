import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Transaction from './Transaction';
import { getTransactions } from '../../actions/transactionActions';
import './Transactions.css'

function Transactions() {
    const dispatch = useDispatch();
    const { transactions } = useSelector((state) => state.transactions)
    
    useEffect(() => {
        dispatch(getTransactions());
    }, [dispatch])

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
