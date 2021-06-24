import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        let token;
        let googleToken;

        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token = req.headers.authorization.split(" ")[1];
        }

        if(token && token.length > 500){
            googleToken = token;
        }

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