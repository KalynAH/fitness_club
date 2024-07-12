import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"; //sends cookieto client
import { dbConnect } from "./config/config.mongoose.js";
import { routineRouter } from "./routes/fitness.routes.js";
import { userRouter } from "./routes/user.routes.js";

const app = express();
app.use(express.json(), cors());
app.use("/routine", routineRouter);
app.use("/user", userRouter);
app.use(cookieParser(process.env.SECRET_KEY));

dotenv.config();
const PORT = process.env.PORT;
dbConnect();

// server has to listen on the port
app.listen(PORT, () => console.log(`Serving is running on Kay: ${PORT}`));
