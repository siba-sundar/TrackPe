import driverModel from "../models/driver-model.js";
import driverService from "../services/driver-service.js";
import { validationResult } from "express-validator";

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

export default { registerDriver };
