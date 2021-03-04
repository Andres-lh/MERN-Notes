import express from 'express';

const router = express.Router();

router.post('/register', (req, res) =>{
    res.json({msg: 'Register a user'});
})

router.post('/login', (req, res) =>{
    res.json({msg: 'login'});
})

export default router;