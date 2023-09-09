import React from "react";

import Footer from "./footer";
import Header from "./header";
import Body from "./orderBody/body";
import { useEffect, useState } from "react";

const OrdersPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const token = localStorage.getItem("token");
  useEffect(() => {
    const Verify = async () => {
      const response = await fetch("http://localhost:5050/api/v1/util/verify", {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        if (data.massege === "success") {
          setIsLoggedIn(true);
        }
      }
    };
    Verify();
  }, [token]);

  if (isLoggedIn === false)
    return <div>Invalid Token. Please Try Logging In Again.</div>;
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default OrdersPage;
