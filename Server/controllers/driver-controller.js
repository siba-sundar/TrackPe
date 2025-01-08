import driverModel from "../models/driver-model.js";
import driverService from "../services/driver-service.js";
import { validationResult } from "express-validator";
import blackListTokenModel from "../models/blacklist-model.js";

const registerDriver = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    try {
        const isCaptainAlreadyExist = await driverModel.findOne({ email });

        if (isCaptainAlreadyExist) {
            return res.status(400).json({ message: "Captain already exists" });
        }

        const hashedPassword = await driverModel.hashPassword(password);

        const driver = await driverService.createDriver({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType,
        });

        const token = driver.generateAuthToken();

        res.status(201).json({ token, driver });
    } catch (error) {
        next(error);
    }
};

const loginDriver = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        const driver = await driverModel.findOne({ email }).select("+password");

        if (!driver) {
            return res.status(404).json({ message: "Driver not found" });
        }

        const isMatch = await driver.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = driver.generateAuthToken();

        res.status(200).json({ token, driver });
    } catch (error) {
        next(error);
    }
};

const getDriverProfile = async (req, res, next) => {
    try {
        const driver = req.driver;
        res.status(200).json(driver);
    } catch (error) {
        next(error);
    }
};

const logoutDriver = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization.split(" ")[1];
        await blackListTokenModel.create({ token });
        res.clearCookie("token");
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        next(error);
    }
};

export default { registerDriver, loginDriver, getDriverProfile, logoutDriver };
