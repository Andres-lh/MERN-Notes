import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDb from './config/db.js';
import userRouter from './routes/userRouter.js';
import notesRouter from './routes/notesRouter.js';

const app = express();

dotenv.config();

//Database connection
connectDb();


const PORT = process.env.PORT;

//Middlewares
app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

//Routes
app.use('/api/users', userRouter);
app.use('/api/notes', notesRouter);


app.listen(PORT, () =>console.log(`Server running on port http://localhost:${PORT}`))

