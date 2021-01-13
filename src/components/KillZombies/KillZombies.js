import { useState, useContext } from "react";
import { AppContext } from "../../context/context";
import Button from "../Button/Button";
import styles from "./KillZombies.module.css";

const KillZombie = ({ currentLocation, toggleModal }) => {
  const [state, setState] = useContext(AppContext);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  const handleCount = (e) => {
    const value = e.target.value;
    if (value < 0 || value > 9999) return;
    setCount(parseInt(e.target.value));
  };

  const handleKill = () => {
    var newData = state.map((elem) => {
      if (elem.location === currentLocation && elem.zombieCount >= count) {
        toggleModal();
        return Object.assign({}, elem, {
          zombieCount: elem.zombieCount - count,
        });
      } else {
        setError(true);
        return elem;
      }
    });
    setState(newData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <p className={styles.text}>How many Zombies would you want to kill?</p>
        <input
          className={styles.input}
          type="number"
          value={count}
          onChange={handleCount}
        />
        <Button label="KILL!" color="red" handleClick={handleKill} />
      </div>
      {error && (
        <p className={styles.error}>
          You can't kill more zombies than you have in your current location
        </p>
      )}
    </div>
  );
};

export default KillZombie;
