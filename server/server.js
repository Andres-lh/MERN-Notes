import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDb from './config/db.js';
import userRouter from './routes/userRouter.js';
import notesRouter from './routes/notesRouter.js';
import transactionRouter from './routes/transactionRoutes.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();
dotenv.config();

//Middlewares
app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

//Routes
app.use('/api/users', userRouter);
app.use('/api/notes', notesRouter);
app.use('/api/transactions',  transactionRouter);

//Error handler
app.use(errorHandler);

//Database connection
connectDb();

const PORT = process.env.PORT;
app.listen(PORT, () =>console.log(`Server running on port http://localhost:${PORT}`))

