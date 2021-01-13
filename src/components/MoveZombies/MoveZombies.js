import { useState, useContext, useEffect } from "react";
import Button from "../Button/Button";
import styles from "./MoveZombies.module.css";
import { AppContext } from "../../context/context";

const MoveZombies = ({ location, toggleModal }) => {
  const [state, setState] = useContext(AppContext);
  const [count, setCount] = useState(0);
  const [area, setArea] = useState("");

  const handleCount = (e) => {
    const value = e.target.value;
    if (value < 0 || value > 9999) return;
    setCount(parseInt(e.target.value));
  };

  const handleSelect = (e) => {
    setArea(e.target.value);
  };

  const handleMove = () => {
    var newData = state.map((elem) => {
      if (count > elem.zombieCount || area === "") return elem;
      if (elem.name === area)
        return Object.assign({}, elem, {
          zombieCount: elem.zombieCount + count,
        });
      if (elem.name === location)
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
      <p className={styles.text}>Move</p>
      <input
        className={styles.input}
        type="number"
        value={count}
        onChange={handleCount}
      />
      <p className={styles.text}>Zombies to </p>
      <select className={styles.select} onChange={handleSelect}>
        <option key="1" value=""></option>
        {state
          .filter((elem) => elem.name !== location)
          .map((option) => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))}
      </select>
      <Button label="MOVE!" color="lightgreen" handleClick={handleMove} />
    </>
  );
};

export default MoveZombies;
