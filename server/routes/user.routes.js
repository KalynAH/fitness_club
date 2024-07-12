import { Router } from "express";
import User from "../models/user.model.js";
import { login, logout, register } from "../controllers/user.controller.js";

export const userRouter = Router();

// function for new user

userRouter.route("/register").post(register);
userRouter.route("/login").post(login);
userRouter.route("/logout").post(logout);
