import { useState, useEffect, useContext } from "react";
import {
  deleteRoutineById,
  getAllRoutines,
  getRoutinesById,
  updateRoutineById,
} from "../../service/client.service";
import { useParams, useNavigate } from "react-router-dom";
import "./RoutineDisplay.css";
import { RoutineContext } from "../../Context/Context";

const RoutineDisplay = () => {
  const [routine, setRoutine] = useState({});
  const routineContext = useContext(RoutineContext);
  const { setRoutines } = routineContext;
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getRoutinesById(id)
      .then((res) => setRoutine(res))
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    getAllRoutines()
      .then((res) => setRoutines(res))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    getRoutinesById(id)
      .then((res) => setFormData(res))
      .catch((error) => console.log(error));
  }, [id]);

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    description: "",
    date: "",
    length_of_time: "",
  });

  const [frontError, setFrontError] = useState({
    name: "",
    title: "",
    description: "",
    date: "",
    length_of_time: "",
  });

  const formValidations = (name, value) => {
    const validation = {
      name: (value) => {
        if (value.length === 0) {
          return "Name is required.";
        } else if (value.length < 2) {
          return "Name must be at least 2 characters long.";
        }
      },
      title: (value) => {
        if (value.length === 0) {
          return "Routine title is required.";
        } else if (value.length < 5) {
          return "Routine title must be 5 characters long.";
        }
      },
      description: (value) => {
        if (value.length === 0) {
          return "Description is required.";
        }
      },
      date: (value) => {
        if (!isNaN(value)) {
          return "Must select a Workout date.";
        }
      },
      length_of_time: (value) => {
        if (value < 1) {
          return "You must exercise at least 1 minute.";
        }
      },
    };
    setFrontError((prev) => ({ ...prev, [name]: validation[name](value) }));
  };

  const showFormHandler = () => {
    setShowForm(!showForm);
  };

  const updateRoutine = (e) => {
    const { name, value } = e.target;
    formValidations(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const deleteRoutine = (routineId) => {
    deleteRoutineById(routineId);
    setRoutines((prev) => prev.filter((routine) => routine._id !== routineId));
    navigate("/routines");
  };

  const submitRoutine = (e) => {
    e.preventDefault();
    updateRoutineById(formData)
      .then((res) => {
        setRoutine(res);
        setShowForm(!showForm);
      })
      .catch((error) => console.log(error));
  };

  const date = new Date(routine?.date);
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className="d-flex justify-content-center align-items-center container-xl">
      <main className="routine-main card shadow p-4 mt-5">
        <div className="card-body">
          <h4 className="text-center mt-3 mb-4">{routine?.title}</h4>
          <p>Added by: {routine?.name}</p>
          <p>Workout Description: {routine?.description}</p>
          <p>Workout date: {formattedDate}</p>
          <p>Length of Time: {routine?.length_of_time}</p>
          <div className="d-flex gap-3 mt-3 justify-content-end">
            <button
              className="btn btn-outline-warning btn-sm"
              onClick={showFormHandler}
            >
              Update Info
            </button>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => deleteRoutine(routine?._id)}
            >
              Delete Routine
            </button>
          </div>
        </div>
      </main>
      <aside className={showForm ? "" : "hidden"}>
        {showForm && (
          <div className="card shadow w-75 mx-auto mt-5 p-4 mb-5">
            <h2 className="text-center mt-5">
              Welcome to the Virtual Fitness Club
            </h2>
            <form className="card-body p-5" onSubmit={submitRoutine}>
              <h3 className="text-center mb-5">Update Your Workout Routine</h3>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name:"
                  value={formData.name}
                  onChange={updateRoutine}
                />
                <p className="text-danger">{frontError?.name}</p>
                <label htmlFor="name">Name:</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="Title:"
                  value={formData.title}
                  onChange={updateRoutine}
                />
                <p className="text-danger">{frontError?.title}</p>
                <label htmlFor="title">Title:</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  placeholder="Routine Description:"
                  value={formData.description}
                  onChange={updateRoutine}
                />
                <p className="text-danger">{frontError?.description}</p>
                <label htmlFor="description">Routine Description:</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  placeholder="Workout Date:"
                  value={formData.date}
                  onChange={updateRoutine}
                />
                <p className="text-danger">{frontError?.date}</p>
                <label htmlFor="date">Workout Date:</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  name="length_of_time"
                  className="form-control"
                  placeholder="Length of Time:"
                  value={formData.length_of_time}
                  onChange={updateRoutine}
                />
                <p className="text-danger">{frontError?.length_of_time}</p>
                <label htmlFor="length_of_time">Length of Time:</label>
              </div>
              <div className="mb-3 d-flex justify-content-end align-items-center gap-2 mt-4">
                <button
                  className="btn btn-sm btn-outline-warning"
                  onClick={showFormHandler}
                >
                  Cancel
                </button>
                <button className="btn btn-sm btn-outline-danger" type="submit">
                  Update Routine
                </button>
              </div>
            </form>
          </div>
        )}
      </aside>
    </div>
  );
};

export default RoutineDisplay;
