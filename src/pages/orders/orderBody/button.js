import { OrderButton } from "../../../styles/ordersstyle";

const Button = (props) => {
  return (
    <OrderButton
      onClick={(e) => {
        props.clicked(e.target.innerHTML);
      }}
    >
      {props.name}
    </OrderButton>
  );
};

export default Button;
