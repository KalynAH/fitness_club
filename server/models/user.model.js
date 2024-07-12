import { Schema, model } from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";
import validator from "validator";
import bcrypt from "bcrypt";

const { isEmail } = validator;
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required."],
      unique: [true, "That username is already taken."],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "That email is already taken."],
      validate: [isEmail, "Invalid Email"],
    },
    password: {
      type: String,
      required: [true, "A password is required"],
      minLength: [8, "Password has to be 8 characters or greater"],
    },
  },
  { timestamps: true }
);
UserSchema.plugin(mongooseUniqueValidator);

// middleware
UserSchema.virtual("confirmPassword")
  .get(function () {
    return this._confirmPassword;
  })
  .set(function (value) {
    this._confirmPassword = value;
  });

UserSchema.pre("validate", function (next) {
  if (this.isModified("password") && this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Passwords do not match");
  }
  next();
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const User = model("User", UserSchema);
export default User;

// UserSchema.pre("validate", function (next) {
//   if (this.isModified("password") && this.password !== this.confirmPassword) {
//     this.invalidate("confirmPassword", "Passwords must match");
//   }
//   next();
// });

// UserSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   try {
//     const hashedPassword = await bcrypt.hash(this.password, 10);
//     this.password = hashedPassword;
//     next();
//   } catch (error) {
//     next(error);
//   }
// });
