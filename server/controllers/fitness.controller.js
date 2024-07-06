import Fitness from "../models/fitness.model.js";

// Create
export const createRoutine = async (req, res) => {
  try {
    const ROUTINE = await Fitness.create(req.body);
    res.status(201).json(ROUTINE);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Read
export const getAllRoutines = async (req, res) => {
  try {
    const ROUTINES = await Fitness.find();
    res.status(200).json(ROUTINES);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Get a Routine by ID
export const getRoutinesById = async (req, res) => {
  const { id } = req.params;
  try {
    const ROUTINES = await Fitness.findById(id);
    res.status(200).json(ROUTINES);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Update /edit a Routines
export const updateRoutineById = async (req, res) => {
  const { id } = req.params;
  const options = {
    new: true,
    runValidators: true,
  };
  try {
    const UPDATED_ROUTINES = await Fitness.findByIdAndUpdate(
      id,
      req.body,
      options
    );
    res.status(200).json(UPDATED_ROUTINES);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Delete
export const deleteRoutineById = async (req, res) => {
  const { id } = req.params;
  try {
    const DELETED_ROUTINES = await Fitness.findByIdAndDelete(id);
    res.status(200).json(DELETED_ROUTINES);
  } catch (error) {
    res.status(400).json(error);
  }
};
