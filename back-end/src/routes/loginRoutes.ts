import express from 'express'
import loginController from '../controllers/loginController'
const router = express.Router();

router.post('/login', loginController.login);
router.post('/register', loginController.register);
//router.get('/authorize',);
//router.post('/logout', );

export default router;