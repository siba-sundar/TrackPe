import express from "express";
import {body, validationResult} from "express-validator";
const router = express.Router();
import userController from "../controllers/user-controller.js";


router.post("/register", [
    body('email').isEmail().withMessage('Invalid email address'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({min: 8}).withMessage('Password must be at least 8 characters long'),
],
userController.registerUser
)

export default router;
