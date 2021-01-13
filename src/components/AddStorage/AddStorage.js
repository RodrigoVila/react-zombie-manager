import { useState, useContext } from "react";
import { AppContext } from "../../context/context";
import Button from "../Button/Button";
import styles from "./AddStorage.module.css";
import image from "../../assets/zombie.png";

const AddStorage = () => {
  const [state, setState] = useContext(AppContext);
  const [area, setArea] = useState("");

  const addStorage = () => {
    if (area === "") return;
    setState([...state, { name: area, zombieCount: 0 }]);
    setArea("");
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="Zombie" />
      <div className={styles.innerContainer}>
        <p className={styles.title}>
          Add a new storage to keep even more Zombies!
        </p>
        <div className={styles.infoContainer}>
          <p className={styles.text}>New storage name:</p>
          <input
            className={styles.input}
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
          <Button
            label="ADD!"
            color="cornflowerblue"
            handleClick={addStorage}
          />
        </div>
      </div>
      <img
        className={`${styles.image} ${styles.mirrorImage}`}
        src={image}
        alt="Zombie"
      />
    </div>
  );
};

export default AddStorage;
