import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export const register = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const userToken = jwt.sign(
      { userId: newUser._id, username: newUser.username },
      process.env.SECRET_KEY
    );
    console.log(userToken);
    res.cookie("userToken", userToken);
    res.status(201).json(newUser);
  } catch (error) {
    console.log("ERR", error);
    return res.status(400).json(error);
  }
};

export const login = async (req, res) => {
  // check if the user exist
  const { email, password } = req.body;
  const potentialUser = await User.findOne({ email: email });
  if (!potentialUser) {
    return res.status(404).json({ message: "User not found" });
  }
  // if we get to this point we know there is a user with the given email
  console.log(password, potentialUser.password);
  const isPasswordCorrect = await bcrypt.compare(
    password,
    potentialUser.password
  );
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }
  // if we get here we know the user exists and the passwords match
  const userToken = jwt.sign(
    { userId: potentialUser._id, username: potentialUser.username },
    process.env.SECRET_KEY
  );
  console.log(userToken);
  res.cookie("userToken", userToken);
  return res.status(201).json(potentialUser);
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("userToken");
    res.status(200).json({ message: "Successfully logged out" });
  } catch (error) {
    res.status(400).json(error);
  }
};
