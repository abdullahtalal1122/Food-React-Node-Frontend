import Button from "./button";
import OrderDetails from "./orderDetails";
import styles from "./../../../styles/orders.module.css";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchOrder, setFilter } from "../../../store/orderAction";

const Body = () => {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.order);
  const [status, setStatus] = useState(0);

  // const selectedFilter = useSelector((store) => store.selectedFilter);
  const selectedFilter = useSelector((store) => store.order.selectedFilter);

  function clicked(value) {
    let obj = {
      "New Orders": 0,
      "In Progress": 1,
      "Order Ready": 2,
      "In Delivery": 3,
    };

    setStatus(obj[value]);
    dispatch(setFilter(value));
    dispatch(fetchOrder());
  }

  const SelectedFilter = selectedFilter;

  const filteredOrders = orders.order.filter((order) => {
    if (SelectedFilter === "New Orders") {
      return order.state === 0;
    }
    if (SelectedFilter === "In Progress") {
      return order.state === 1;
    }
    if (SelectedFilter === "Order Ready") {
      return order.state === 2;
    }
    if (SelectedFilter === "In Delivery") {
      return order.state === 3;
    }
  });

  useEffect(() => {
    const APIcall = async () => {
      dispatch(fetchOrder());
    };
    APIcall();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.ordersButtons}>
          <Button name="New Orders" clicked={clicked} state={status === 0} />
          <Button name="In Progress" clicked={clicked} state={status === 1} />
          <Button name="Order Ready" clicked={clicked} state={status === 2} />
          <Button name="In Delivery" clicked={clicked} state={status === 3} />
        </div>
        {filteredOrders.length > 0 ? (
          filteredOrders.map((o) => (
            <OrderDetails
              key={o._id}
              id={o._id}
              items={o.orderitems}
              time={o.updatedAt}
            />
          ))
        ) : (
          <p>No orders to display.</p>
        )}
      </div>
    </div>
  );
};

export default Body;
