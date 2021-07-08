import express from 'express';
import { getTransactions, createTransaction } from '../controllers/transactionController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.route('/')
    .get(auth, getTransactions)
    .post(auth, createTransaction)

export default router;