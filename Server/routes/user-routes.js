import express from "express";
import {body, validationResult} from "express-validator";
const router = express.Router();
import userController from "../controllers/user-controller.js";
import authMiddleware from "../middlewares/auth-middleware.js";


router.post("/register", [
    body('email').isEmail().withMessage('Invalid email address'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({min: 8}).withMessage('Password must be at least 8 characters long'),
],
userController.registerUser
)



router.post('/login', [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({min: 8}).withMessage('Password must be at least 8 characters long'),
],
userController.loginUser
)


router.get('/profile' ,authMiddleware.authUser, userController.getUserProfile);



router.get("/logout", authMiddleware.authUser, userController.logoutUser);
export default router;
