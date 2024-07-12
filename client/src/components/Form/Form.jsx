import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createRoutine } from "../../service/client.service";
import "./Form.css";
import { RoutineContext } from "../../Context/Context";

const Form = () => {
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

  const navigate = useNavigate();

  const routineContext = useContext(RoutineContext);

  const { setRoutines } = routineContext;

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

  const updateRoutine = (e) => {
    const { name, value } = e.target;
    formValidations(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitRoutine = (e) => {
    e.preventDefault();
    createRoutine(formData)
      .then(
        (res) => setRoutines((prev) => [...prev, res]),
        navigate("/routines")
      )
      .catch((error) => console.log(error));
  };

  return (
    <div className="card shadow w-50 mx-auto mt-5 fade-in">
      <h1 className="text-center mt-4 mb-4">
        Welcome to the Virtual Fitness Club
      </h1>
      <form onSubmit={submitRoutine} className="card-body p-5">
        <h2 className="text-center mb-5">Add a New Exercise Routine</h2>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name:"
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
            onChange={updateRoutine}
          />
          <p className="text-danger">{frontError?.length_of_time}</p>
          <label htmlFor="length_of_time">Length of Time:</label>
        </div>
        <div className="mb-3 d-flex justify-content-end align-items-center gap-2 mt-4">
          <Link className="btn btn-sm btn-outline-warning" to={"/"}>
            Cancel
          </Link>
          <button className="btn btn-sm btn-outline-primary">
            Add Routine
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
