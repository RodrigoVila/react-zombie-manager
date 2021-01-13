import { useState, useContext } from "react";
import { AppContext } from "../../context/context";
import Button from "../Button/Button";
import styles from "./AddZombies.module.css";

const AddZombies = () => {
  const [state, setState] = useContext(AppContext);
  const [count, setCount] = useState(0);
  const [location, setLocation] = useState("Hospital");

  const handleCount = (e) => {
    const value = e.target.value;
    if (value < 0 || value > 9999) return;
    setCount(parseInt(e.target.value));
  };

  const handleSelect = (e) => {
    setLocation(e.target.value);
  };

  const handleAdd = () => {
    var newData = state.map((elem) => {
      if (elem.location === location)
        return Object.assign({}, elem, {
          zombieCount: elem.zombieCount + count,
        });
      return elem;
    });

    setState(newData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}>Add</div>
      <input
        className={styles.input}
        type="number"
        value={count}
        onChange={handleCount}
      />
      <div className={styles.text}>
        {count === 1 ? "Zombie" : "Zombies"} to:
      </div>
      <>
        <select className={styles.select} onChange={handleSelect}>
          {state.map((option) => (
            <option key={option.location} value={option.location}>
              {option.location}
            </option>
          ))}
        </select>
      </>
      <Button label="OK" color="lightblue" handleClick={handleAdd} />
    </div>
  );
};

export default AddZombies;
