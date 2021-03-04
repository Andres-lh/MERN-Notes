import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import notesRouter from './routes/notesRouter.js';

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
})
    .then(db => console.log('MongoDB database connection established successfully'))
    .catch(err => console.log(err))

app.use(express.json());
app.use(cors());

//Routes
app.use('/users', userRouter);
app.use('/api/notes', notesRouter);

const port = process.env.PORT;
app.listen(port, () =>console.log(`Server running at http://localhost:${port}`));

