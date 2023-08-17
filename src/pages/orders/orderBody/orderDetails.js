import { OrderDetailsContainer } from "../../../styles/ordersstyle";

const OrderDetails = (props) => {
  return (
    <div>
      <OrderDetailsContainer>
        <p>
          <strong> #{props.id}</strong>
        </p>
        <p>{props.items} items</p>
        <p>{props.time}</p>
        <hr></hr>
      </OrderDetailsContainer>
    </div>
  );
};

export default OrderDetails;
