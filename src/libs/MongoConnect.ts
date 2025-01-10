import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise();
    }

    const mongoURL = process.env.MONGO_URI;
    if (!mongoURL) {
        throw new Error("MongoDB Connection URL is not defined in environment variables");
    }

    const connection = await mongoose.connect(mongoURL, {
        dbName: "Bocchi",
    });

    console.log("Connected to MongoDB Successfully");
    return connection;

    } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
    }
};