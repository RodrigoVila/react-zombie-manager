import { useState, useContext } from "react";
import { AppContext } from "../../context/context";
import Button from "../Button/Button";
import styles from "./KillZombies.module.css";

const KillZombie = ({ location, toggleModal }) => {
  const [state, setState] = useContext(AppContext);
  const [count, setCount] = useState(0);

  const handleCount = (e) => {
    const value = e.target.value;
    if (value < 0 || value > 9999) return;
    setCount(parseInt(e.target.value));
  };

  const handleKill = () => {
    var newData = state.map((elem) => {
      if (elem.name === location && elem.zombieCount >= count)
        return Object.assign({}, elem, {
          zombieCount: elem.zombieCount - count,
        });
      return elem;
    });

    setState(newData);
    toggleModal();
  };

  return (
    <>
      <p className={styles.text}>How many Zombies would you want to kill?</p>
      <input
        className={styles.input}
        type="number"
        value={count}
        onChange={handleCount}
      />
      <Button label="KILL!" color="red" handleClick={handleKill} />
    </>
  );
};

export default KillZombie;
