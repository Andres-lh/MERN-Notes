import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import notesRouter from './routes/notesRouter.js';

const app = express();

dotenv.config();
const port = process.env.PORT;

//Database connection
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
})
    .then(() => console.log('MongoDB database connection established successfully'))
    .then(() => app.listen(port, () =>console.log(`Server running at http://localhost:${port}`)))
    .catch(err => console.log(err))


//Middlewares
app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

//Routes
app.use('/api/users', userRouter);
app.use('/api/notes', notesRouter);




