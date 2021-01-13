import { useState, useEffect, createContext } from "react";

const initialState = [
  {
    name: "Hospital",
    zombieCount: 0,
  },
  {
    name: "School",
    zombieCount: 0,
  },
  {
    name: "Warehouse",
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
