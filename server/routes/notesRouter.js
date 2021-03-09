import express from 'express';
import { getNotes, createNotes } from '../controllers/noteController.js';
import auth from '../middleware/auth.js'

const router = express.Router();
router.route('/')
    .get(auth, getNotes)
    .post(auth, createNotes)

router.route('/id:')
    .get()
    .post()    

export default router;