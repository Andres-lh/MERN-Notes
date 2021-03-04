import express from 'express';

const router = express.Router();

router.route('/note')
    .get(((req, res) => res.json({msg: 'Notes'})))
    .post()
    
export default router;