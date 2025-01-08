import driverModel from "../models/driver-model.js";
import userModel from "../models/user-model.js";
import jwt from "jsonwebtoken";
import blackListTokenModel from "../models/blacklist-model.js";

const authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const isBlacklisted = await blackListTokenModel.findOne({ token });

    if (isBlacklisted) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await userModel.findById(decode._id);

        req.user = user;
        return next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};

const authDriver = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const isBlacklisted = await blackListTokenModel.findOne({ token });

    if (isBlacklisted) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const driver = await driverModel.findById(decode._id);

        req.driver = driver;
        return next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};

export default { authUser, authDriver };
