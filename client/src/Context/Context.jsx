import { useState, createContext, useEffect } from "react";
import { getAllRoutines } from "../service/client.service";

const RoutineContext = createContext({
  routines: [],
  setRoutines: () => {},
});

const RoutineProvider = ({ children }) => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    getAllRoutines()
      .then((res) => setRoutines(res))
      .catch((error) => console.log(error));
  }, []);

  const contextValue = {
    routines,
    setRoutines,
  };

  return (
    <RoutineContext.Provider value={contextValue}>
      {children}
    </RoutineContext.Provider>
  );
};

export { RoutineContext };
export default RoutineProvider;
