import axios from "axios";

const routine_instance = axios.create({
  baseURL: "http://localhost:8004/routine",
});

export const createRoutine = async (routineData) => {
  try {
    const res = await routine_instance.post("/", routineData);
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const getAllRoutines = async () => {
  try {
    const res = await routine_instance.get("/");
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const getRoutinesById = async (id) => {
  try {
    const res = await routine_instance.get(`/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const updateRoutineById = async (routine) => {
  try {
    const res = await routine_instance.put(`/${routine._id}`, routine);
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const deleteRoutineById = async (id) => {
  try {
    const res = await routine_instance.delete(`/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
