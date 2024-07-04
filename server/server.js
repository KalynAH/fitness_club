import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import router from router.js

import { dbConnect } from "./config/config.mongoose.js";

const app = express();
app.use(express.json(), cors());
// router

dotenv.config();
const PORT = process.env.PORT;
dbConnect();

// server has to listen on the port
app.listen(PORT, () => console.log(`Serving is running on Kay: ${PORT}`));
