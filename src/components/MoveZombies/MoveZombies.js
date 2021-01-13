import { useState, useContext } from "react";
import Button from "../Button/Button";
import styles from "./MoveZombies.module.css";
import { AppContext } from "../../context/context";

const MoveZombies = ({ currentLocation, toggleModal }) => {
  const [state, setState] = useContext(AppContext);
  const [count, setCount] = useState(0);
  const [newLocation, setNewLocation] = useState("");
  const [error, setError] = useState(false);

  const handleSelect = (e) => {
    setNewLocation(e.target.value);
  };

  const handleMove = () => {
    if (!newLocation) return;
    const locationCount = state.find(
      (elem) => elem.location === currentLocation
    ).zombieCount;
    var newData = state.map((elem) => {
      if (locationCount < count) {
        setError(true);
        return elem;
      }
      if (elem.location === newLocation)
        return Object.assign({}, elem, {
          zombieCount: elem.zombieCount + count,
        });

      if (elem.location === currentLocation) {
        return Object.assign({}, elem, {
          zombieCount: elem.zombieCount - count,
        });
      } else {
        setError(true);
      }
      toggleModal();
      return elem;
    });

    setState(newData);
  };

  // Cant transfer negative numbers or more then 9999 zombies
  const maxNumberInput = (e) => {
    const value = e.target.value;
    if (value < 0 || value > 9999) return;
    setCount(parseInt(e.target.value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <p className={styles.text}>Move</p>
        <input
          className={styles.input}
          type="number"
          value={count}
          onChange={maxNumberInput}
        />
        <p className={styles.text}>Zombies to </p>
        <select className={styles.select} onChange={handleSelect}>
          <option key="1" value=""></option>
          {state
            .filter((elem) => elem.location !== currentLocation)
            .map((option) => (
              <option key={option.location} value={option.location}>
                {option.location}
              </option>
            ))}
        </select>
        <Button label="MOVE!" color="lightgreen" handleClick={handleMove} />
      </div>
      {error && (
        <p className={styles.error}>
          You can't move more zombies than you have in your current location
        </p>
      )}
    </div>
  );
};

export default MoveZombies;
