import express from 'express';
import { getNotes, createNotes, deleteNote, getNote, updateNote } from '../controllers/noteController.js';
import auth from '../middleware/auth.js'

const router = express.Router();
router.route('/')
    .get(auth, getNotes)
    .post(auth, createNotes)

router.route('/:id')
    .get(auth, getNote)
    .put(auth, updateNote)
    .delete(auth, deleteNote) 



export default router;