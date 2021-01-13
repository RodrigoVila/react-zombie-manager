import styles from "./Modal.module.css";

const Modal = ({ children, toggleModal }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.closeButton} onClick={toggleModal}>
          X
        </div>
        <div className={styles.info}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
