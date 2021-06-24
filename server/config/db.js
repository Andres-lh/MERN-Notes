import mongoose from 'mongoose';

const connectDb = async() => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    })
        .then(() => console.log('MongoDB database connection established successfully'))
        .catch(err => console.log(err))

}
export default connectDb

