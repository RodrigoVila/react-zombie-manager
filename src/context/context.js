import { useState, useEffect, createContext } from "react";

const initialState = [
  {
    location: "Hospital",
    zombieCount: 0,
  },
  {
    location: "School",
    zombieCount: 0,
  },
  {
    location: "Warehouse",
    zombieCount: 0,
  },
];

const AppContext = createContext(initialState);

const StateProvider = ({ children }) => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("zombies")) || initialState
  );

  useEffect(() => {
    localStorage.setItem("zombies", JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, StateProvider };
