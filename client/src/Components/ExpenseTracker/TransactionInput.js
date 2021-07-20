import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { createTransaction } from '../../actions/transactionActions';
import './TransactionsInput.css';

function TransactionInput() {

    const dispatch = useDispatch();    
    const [transaction, setTransaction] = useState({
        type: "Income",
        name: "",
        amount: ""
    })

    const onChangeInput = (e) => {
        const {name, value} = e.target;
        setTransaction({ ...transaction, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        try {
            dispatch(createTransaction(transaction));
            setTransaction({
                ...transaction,
                name: "",
                amount: ""
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <div className="transaction-input" >
                <label>Type</label>
                <select onChange={(e) => setTransaction({...transaction, type: e.target.value})}>
                    <option value="Income" >Income</option>
                    <option value="Expense" >Expense</option>
                </select>
                 </div >
                <div className="transaction-input">
                    <input type="text" placeholder="Name" required name="name" id="name" value={transaction.name} onChange={onChangeInput} autoComplete="off"/>
                    <input type="number" placeholder="Add a value" name="amount" id="amount" value={transaction.amount} onChange={onChangeInput} min="1" autoComplete="off" />
                    <button className="transaction-input_button">Submit</button>
                </div>
            </form>
    )
}

export default TransactionInput;
