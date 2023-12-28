import express from 'express'
import userController from "../controllers/userController"

const router = express.Router();

router.put('/updateProgress', userController.updateProgress);

export default router;