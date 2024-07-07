import { Schema, model } from "mongoose";

const fitnessSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      minLength: [2, "Name should be at least two characters."],
      maxLength: [50, "Name can be not longer than fifty characters."],
    },
    title: {
      type: String,
      required: [true, " Title is required"],
      minLength: [5, "Title should be at least Five characters"],
      maxLength: [50, "Title cannot be more than fifty characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minLength: [2, "Description should be at least two characters"],
      maxLength: [50, "Title cannot be more than fifty characters"],
    },
    date: {
      type: Date,
      required: [true],
      default: Date.now(),
    },
    length_of_time: {
      type: Number,
      required: [true],
      min: [5, "Come on, you can do more than a five minute workout!!"],
    },
  },
  { timestamps: true }
);
const Fitness = model("fitness", fitnessSchema);
export default Fitness;
