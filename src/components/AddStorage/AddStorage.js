import { useState, useContext } from "react";
import { AppContext } from "../../context/context";
import Button from "../Button/Button";
import styles from "./AddStorage.module.css";
import image from "../../assets/zombie.png";

const AddStorage = () => {
  const [state, setState] = useContext(AppContext);
  const [newLocation, setNewLocation] = useState("");

  const addStorage = () => {
    if (newLocation === "") return;
    setState([...state, { location: newLocation, zombieCount: 0 }]);
    setNewLocation("");
  };
  console.log("nl",newLocation);
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
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}
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
