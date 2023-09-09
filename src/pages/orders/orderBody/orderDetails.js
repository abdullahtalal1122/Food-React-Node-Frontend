import styles from "./../../../styles/orders.module.css";
import moment from "moment";

const OrderDetails = (props) => {
  const orderTime = moment(props.time);
  const timeAgo = orderTime.fromNow();

  return (
    <div className={styles.ordersDetails}>
      <div className={styles.ordersDetailsIcons}></div>
      <div className={styles.ordersDetailsContent}>
        <div className={styles.ordersDetailsContentFirstDiv}>
          <h1>Order #{props.id}</h1>
          <p className={styles.ordersDetailsContentFirstDivP}>
            {props.items} items
          </p>
          <p className={styles.ordersDetailsContentFirstDivP}>{timeAgo}</p>
        </div>
        <div className={styles.ordersDetailsContentButtons}>
          <button className={styles.ordersDetailsContentButtonsB}>23</button>
          <button className={styles.ordersDetailsContentButtonsB}>cash</button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
