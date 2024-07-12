import { useContext, useEffect } from "react";
import { RoutineContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import "./Display.css";

const Display = () => {
  const routineContext = useContext(RoutineContext);

  const { routines } = routineContext;

  return (
    <>
      <h2 className="text-center mt-5 mb-4">All Workout Routines</h2>
      <div className="container routine-container">
        {routines.map((routine) => {
          const date = new Date(routine.date);

          const options = { year: "numeric", month: "2-digit", day: "2-digit" };

          const formattedDate = date.toLocaleDateString("en-US", options);

          return (
            <Link
              key={routine._id}
              className="card shadow mt-5 routine-card"
              to={`/${routine._id}`}
            >
              <div className="card-body">
                <h5 className="text-center mb-4">{routine.title}</h5>
                <p>Added by: {routine.name}</p>
                <p>Description: {routine.description}</p>
                <p>Workout Date: {formattedDate}</p>
                <p>Lenght of Time: {routine.length_of_time} minutes</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Display;
