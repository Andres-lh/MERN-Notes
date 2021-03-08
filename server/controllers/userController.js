import Users from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const userRegistration = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await Users.findOne({email: email})
        if(user) return res.status(400).json({msg: "The email already exists."});

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new Users({
            username: username,
            email: email,
            password: passwordHash
        })
        await newUser.save();
        res.json({msg: "Sign up succesful"});
    
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
        res.json({token});
    } catch(err) {
        return res.status(500).json({msg: err.message})
    }
    
}

export const verifiedUser = (req, res) => {
    try {
        const token = req.header("Authorization");
        if(!token) return res.send(false);

        jwt.verify(token, process.env.TOKEN, async (err, verified) => {
            if(err) return res.send(false);

            const user = await Users.findById(verified.id)
            if(!user) return res.send(false);

            return res.send(true);
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}