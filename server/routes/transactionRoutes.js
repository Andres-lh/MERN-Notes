import express from 'express';
import { getTransactions, createTransaction, deleteTransaction } from '../controllers/transactionController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.route('/')
    .get(auth, getTransactions)
    .post(auth, createTransaction)

router.route('/:id')
    .delete(auth, deleteTransaction)

export default router;