import express from 'express';

const router = express.Router();

router.get('/', (req, res) =>{
    res.send("Hola")
})

router.route('/id:')
    .get()
    .post()    

export default router;