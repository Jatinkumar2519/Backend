import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    const mongoUrl = process.env.MONGODB_URL;

    if (!mongoUrl) {
        throw new Error("MONGODB_URL is not defined in the environment.");
    }

    const connectionIns = await mongoose.connect(`${mongoUrl}/${DB_NAME}`);
    console.log(`MongoDB connected. Host: ${connectionIns.connection.host}`);
};

export default connectDB;
