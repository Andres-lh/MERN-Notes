import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter a name' ],
        trim: true
    },
    userId: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: [true, 'Please enter a number']
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

