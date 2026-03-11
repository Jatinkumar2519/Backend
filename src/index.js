import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./DB/index.js";

dotenv.config({
    path: "./.env",
});

const port = Number(process.env.PORT) || 8000;

(async () => {
    try {
        await connectDB();

        app.on("error", (error) => {
            throw error;
        });

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
        console.error("Startup failed:", error.message);
        process.exit(1);
    }
})();

