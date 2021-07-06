import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
    username: {
       type: String,
       required: [true, "Please enter a username"],
       trim: true
    }, 
    email: {
        type: String,
        required: [true, "Please enter your email"],
        trim: true,
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please enter a valid email'
        ]
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        select: false,
        minlength: 6,
    }
},{
    timestamps: true
})

UserSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const Users = mongoose.model('Users', UserSchema);
export default Users;