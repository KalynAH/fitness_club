import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

export const dbConnect = async () => {
  try {
    connect(MONGODB_URI, { dbName: "fitness1" });
    console.group("Connected to Mongo DB"); //db name should change for each assignment/ project
  } catch (error) {
    console.log(`Db connection Failed: --> ${error}`);
  }
};
