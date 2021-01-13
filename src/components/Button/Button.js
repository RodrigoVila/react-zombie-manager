import styles from "./Button.module.css";

const Button = ({ label, color, handleClick }) => {
  return (
    <div
      className={styles.button}
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {label}
    </div>
  );
};

export default Button;
