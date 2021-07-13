import { useState } from 'react' 

function TransactionInput() {

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
    }

    console.log(transaction)
    return (
        <form  >
            <div className="tracker-input" >
                <label>Type</label>
                <select onChange={(e) => setTransaction({...transaction, type: e.target.value})}>
                    <option value="Income" >Income</option>
                    <option value="Expense" >Expense</option>
                </select>
            </div>
                <div className="tracker-input">
                    <input type="text" placeholder="Name" required name="name" id="name" value={transaction.name} onChange={onChangeInput}/>
                    <input type="numer" placeholder="Add a value" required name="amount" id="amount" value={transaction.amount} onChange={onChangeInput} />
                    <button className="traker-button">Submit</button>
                </div>
            </form>
    )
}

export default TransactionInput;
