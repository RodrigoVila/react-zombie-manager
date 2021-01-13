import { useState } from "react";
import styles from "./Location.module.css";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import MoveZombies from "../MoveZombies/MoveZombies";
import KillZombies from "../KillZombies/KillZombies";

const Location = ({ location, count }) => {
  const [isModalShown, setModalShown] = useState(false);
  const [isMove, setMove] = useState(false);

  const toggleModal = () => {
    setModalShown(!isModalShown);
  };
  const openMoveModal = () => {
    setMove(true);
    setModalShown(true);
  };
  const openRemoveModal = () => {
    setMove(false);
    setModalShown(true);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{location}</p>
      <p className={styles.zombieQty}>{count}</p>
      <p className={styles.zombiesStored}>
        {count === 1 ? "Zombie" : "Zombies"}
      </p>
      <div className={styles.buttons}>
        <Button label="MOVE" color="lightgreen" handleClick={openMoveModal} />
        <Button label="KILL!" color="red" handleClick={openRemoveModal} />
      </div>
      {isModalShown && isMove && (
        <Modal toggleModal={toggleModal}>
          <MoveZombies currentLocation={location} toggleModal={toggleModal} />
        </Modal>
      )}
      {isModalShown && !isMove && (
        <Modal toggleModal={toggleModal}>
          <KillZombies currentLocation={location} toggleModal={toggleModal} />
        </Modal>
      )}
    </div>
  );
};

export default Location;
