import driverController from "../controllers/driver-controller.js";
import express from "express";
import { body } from "express-validator";
import authMiddleware from "../middlewares/auth-middleware.js";

const router = express.Router();

router.post(
    "/register",
    [
        body("email").isEmail().withMessage("Invalid email"),
        body("fullname.firstname").isLength({ min: 3 }).withMessage("First name must be at least 3 characters long"),
        body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
        body("vehicle.color").isLength({ min: 3 }).withMessage("Color must be at least 3 characters long"),
        body("vehicle.plate").isLength({ min: 3 }).withMessage("Plate must be at least 3 characters long"),
        body("vehicle.capacity").isInt({ min: 1 }).withMessage("Capacity must be at least 1"),
        body("vehicle.vehicleType")
            .isIn(["car", "moto", "auto"])
            .withMessage("Invalid vehicle type"),
    ],
    driverController.registerDriver
);

router.post(
    "/login",
    [
        body("email").isEmail().withMessage("Invalid email"),
        body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
    ],
    driverController.loginDriver
);

router.get("/profile", authMiddleware.authDriver, driverController.getDriverProfile);

router.get("/logout", authMiddleware.authDriver, driverController.logoutDriver);

export default router;
