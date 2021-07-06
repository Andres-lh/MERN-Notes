import Users from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import ErrorResponse from '../utils/errorResponse.js';

export const userRegistration = async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
        if(!username || !email || !password) return next(new ErrorResponse("Please fill all the fields"), 400);

        const user = await Users.findOne({email})
        
        if(user) return next(new ErrorResponse("This email already exists"), 400);

        const newUser = await Users.create({ username, email, password })

        sendToken(newUser, 201, res);
        
    } catch(error) {
        next(error);
    }
}

export const userLogin = async (req, res, next) => {
    const { email, password } = req.body;
    try {

        if(!email || !password) return next(new ErrorResponse("Please enter your email and password"), 400);

        const user = await Users.findOne({ email }).select("+password");

        if(!user) return next(new ErrorResponse("User doesn't exist."), 404)

        const matchPassword = await bcrypt.compare(password, user.password);

        if(!matchPassword) return next(new ErrorResponse("Password is incorrect"), 401)

        sendToken(user, 201, res);
        
    } catch(error) {
        next(error);
    } 
}

const sendToken = (user, statusCode, res) => {
    const token = jwt.sign({ id: user._id }, process.env.TOKEN, { expiresIn: "1d" });
    res.status(statusCode).json({ success: true, token })
}
 