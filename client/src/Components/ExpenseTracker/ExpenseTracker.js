import React from 'react';
import TransactionInput from './TransactionInput';
import Transactions from './Transactions';
import './ExpenseTracker.css'

function ExpenseTracker() {
    return (
        <div className="expenseTracker">
            <TransactionInput />
            <Transactions />
        </div>
    )
}

export default ExpenseTracker;
