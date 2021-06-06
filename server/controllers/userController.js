import Users from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const userRegistration = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await Users.findOne({email: email})
        if(user) return res.status(400).json({msg: "The email already exists."});
    
        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = await Users.create({
            username,
            email,
            password: passwordHash,
        })

        const token =  jwt.sign(newUser, process.env.TOKEN, {expiresIn: "5h"});
        res.status(201).json({result: newUser, token});
        
    } catch(err) {
        return res.status(500).json({msg: err.message});
    }
}

export const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Users.findOne({ email: email } );
        if(!user) return res.status(400).json({msg: "User doesn't exist."});

        const matchPassword = await bcrypt.compare(password, user.password);
        if(!matchPassword) return res.status(400).json({msg: "Password is incorrect."});

        const payload = { id: user._id, name: user.username};
        const token = jwt.sign(payload, process.env.TOKEN, {expiresIn: "5h"});
        res.json({result: user, token});
    } catch(err) {
        return res.status(500).json({msg: err.message})
    } 
}
