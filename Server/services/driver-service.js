import driverModel from "../models/driver-model.js";

const createDriver = async ({ firstname, lastname, email, password, color, plate, capacity, vehicleType }) => {
    if (!firstname || !lastname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error("All fields are required");
    }

    const driver = await driverModel.create({
        fullname: {
            firstname: firstname,
            lastname: lastname,
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType,
        },
    });

    return driver;
};

export default { createDriver };
