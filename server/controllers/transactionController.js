import Transaction from "../models/transactionModel.js";
import ErrorResponse from "../utils/errorResponse.js";

export const getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find({ userId: req.user.id }); 
        res.status(200).json({ success: true, transactions});
    } catch (error) {
        next(error)
    }
}

export const createTransaction = async (req, res, next) => {
    let { name, amount, type } = req.body;

    try {
        if(!name || !amount || !type) return next(new ErrorResponse("Please fill all the fields"), 400);

        if(type === "Expense") {
            amount *= -1;
        }

        const newTransaction = await Transaction.create({
            name,
            type,
            amount,
            userId: req.user.id
        })

        res.status(201).json({success: true, newTransaction})
    } catch (error) {
        next(error)
    }
}   

export const deleteTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id);
        if(!transaction) return next(new ErrorResponse("No transaction found"), 404);
        res.status(200).json({success: true, msg: 'transaction deleted'});
    } catch (error) {
        next(error);
    }
}