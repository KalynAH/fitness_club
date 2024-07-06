import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { dbConnect } from "./config/config.mongoose.js";
import { routineRouter } from "./routes/fitness.routes.js";

const app = express();
app.use(express.json(), cors());
app.use("/routine", routineRouter);

dotenv.config();
const PORT = process.env.PORT;
dbConnect();

// server has to listen on the port
app.listen(PORT, () => console.log(`Serving is running on Kay: ${PORT}`));
