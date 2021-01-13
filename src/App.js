import { useContext } from "react";
import { AppContext } from "./context/context";
import AddZombies from "./components/AddZombies/AddZombies";
import Location from "./components/Location/Location";
import AddStorage from "./components/AddStorage/AddStorage";
import styles from "./App.module.css";

function App() {
  const [state] = useContext(AppContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Zombie Manager</h1>
      <AddZombies />
      <div className={styles.cards}>
        {state.map((storage) => (
          <Location
            key={storage.location}
            location={storage.location}
            count={storage.zombieCount}
          />
        ))}
      </div>
      <AddStorage />
    </div>
  );
}

export default App;
