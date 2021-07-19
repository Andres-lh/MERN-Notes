import './Transaction.css';
import axios from 'axios';

function Transaction({ transaction }) {

    const token = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`

    const deleteTransaction = async () => {
        try{
            await axios.delete(`/api/transactions/${transaction._id}`, {
                headers: {
                    Authorization: token
                }
            })
        } catch (error) {
            console.log(error.response.data.error)
        }
    }   

    return (
        <div className={`transaction-grid transaction_${transaction.type}`}>
            <p className="center-text">{transaction.type}</p>
            <p className="center-text">{transaction.name}</p>
            <p>$ {transaction.amount}</p>
            <i onClick={deleteTransaction} class="fas fa-trash-alt transaction-delete"></i> 
        </div>
    )
}

export default Transaction;
