import express from 'express';
import { userRegistration, userLogin, verifiedUser } from '../controllers/userController.js'

const router = express.Router();

router.post('/register', userRegistration)
router.post('/login', userLogin)

router.get('/verify', verifiedUser)

export default router;