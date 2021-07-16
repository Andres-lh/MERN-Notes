import './Transaction.css';

function Transaction({ transaction }) {
    return (
        <div className={`transaction-grid transaction_${transaction.type}`}>
            <p className="center-text">{transaction.type}</p>
            <p className="center-text">{transaction.name}</p>
            <p>$ {transaction.amount}</p>
            <i class="fas fa-trash-alt transaction-delete"></i>
        </div>
    )
}

export default Transaction;
