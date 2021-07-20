import './Transaction.css';
import { deleteTransaction } from '../../actions/transactionActions';
import { useDispatch } from 'react-redux'

function Transaction({ transaction }) {

    const dispatch = useDispatch();
    
    const removeTransaction = async (id) => {
        if(id){
            try{
                dispatch(deleteTransaction(id))
             } catch (error) {
                 console.log(error.response.data.error)
             }
        }       
    } 
    console.log(transaction._id)
    return (
        <div className={`transaction-grid transaction_${transaction.type}`}>
            <p className="center-text">{transaction.type}</p>
            <p className="center-text">{transaction.name}</p>
            <p>$ {transaction.amount}</p>
            <i onClick={() => removeTransaction(transaction._id)} class="fas fa-trash-alt transaction-delete"></i> 
        </div>
    )
}

export default Transaction;
