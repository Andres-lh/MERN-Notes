import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        const googleToken = token.length > 500;
        if(!token) return res.status(400).json({msg: "Invalid Authentication"});

        let userData;
        if(token && !googleToken) {
            userData = jwt.verify(token, process.env.TOKEN);
            req.userId = userData?.id;
        } else {
            userData = jwt.verify(token);
            req.userId = userData?.sub;
        }

        next();

        
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}

export default auth;