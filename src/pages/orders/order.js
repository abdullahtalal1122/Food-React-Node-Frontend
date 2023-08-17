import Header from "./header";
import Body from "./orderBody/body";
import Footer from "./footer";
import { OrderBody } from "../../styles/ordersstyle";

const Order = () => {
  return (
    <OrderBody>
      <Header />
      <Body />
      <Footer />
    </OrderBody>
  );
};

export default Order;
