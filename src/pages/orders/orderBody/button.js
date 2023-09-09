import styles from "./../../../styles/orders.module.css";

const Button = ({ name = "", state, clicked }) => {
  return (
    <div className={styles.buttonProgressHolder}>
      <button
        className={`${styles.ordersButtonsAB} ${
          state && styles.ordersButtonsActive
        }`}
        onClick={(e) => {
          clicked(e.target.innerHTML);
        }}
      >
        {name}
      </button>
      <span className={styles.buttonsProgress}>4</span>
    </div>
  );
};

export default Button;
