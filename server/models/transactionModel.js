import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name' ],
        trim: true
    },
    amount: {
        type: Number,
        required: [true, 'Please enter a number']
    },
    income : {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
});

const Transaction = mongoose.model('Transaction', TransactionSchema);
export default Transaction;

