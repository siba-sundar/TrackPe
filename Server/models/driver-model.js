import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const driverSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minlength: [3, "First name must be at least 3 characters long"],
        },
        lastName: {
            type: String,
            required: true,
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please use a valid email address"],
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 characters long"],
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive",
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, "Color must be at least 3 characters long"],
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, "Plate must be at least 3 characters long"],
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, "Capacity must be at least 1"],
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ["car", "motorcycle", "auto"],
        },
        location: {
            lat: { type: Number },
            lng: { type: Number },
        },
    },
});

driverSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY, { expiresIn: "24h" });
    return token;
};

driverSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

driverSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};

const driverModel = mongoose.model("Driver", driverSchema);

export default driverModel;
