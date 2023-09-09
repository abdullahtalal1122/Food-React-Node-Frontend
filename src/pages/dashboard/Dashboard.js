// import { useDispatch } from "react-redux";
// import { handlegoogleLogin } from "../../store/loginAction";
import { useEffect, useState } from "react";
import Header from "../orders/header";
import Footer from "../orders/footer";
import styles from "../../styles/dashboard.module.css";
import { Navigate } from "react-router";
const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  //GOOGLE AUTH
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const getUrlParameter = (name) => {
  //     const params = new URLSearchParams(window.location.search);
  //     return params.get(name);
  //   };
  //   const idToken = getUrlParameter("code");
  //   if (idToken) dispatch(handlegoogleLogin(idToken));
  // }, []);

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
        if (data.massege === "Failure") {
          setIsLoggedIn(false);
        }
      }
    };
    Verify();
  }, [token]);
  if (isLoggedIn === false) {
    return <Navigate to="/login"></Navigate>;
  }

  return (
    <div>
      <Header />
      <Dbody />
      <Footer />
    </div>
  );
};

const Dbody = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerItem1}>
        <div className={styles.containerItem1Left}>
          <div className={styles.containerItem1LeftHeading}>
            <p>Daily Report</p>
          </div>
          <div className={styles.containerItem1LeftBox}>
            <div>
              <h5>Total Orders</h5>
              <p>23</p>
            </div>

            <div>
              <h5>Total Delivered</h5>
              <p>45</p>
            </div>

            <div>
              <h5>Total Canceled</h5>
              <p>10</p>
            </div>
          </div>
        </div>
        <div className={styles.containerItem1Left}>
          <div className={styles.containerItem1LeftHeading}>
            <p>Monthly Report</p>
          </div>
          <div className={styles.containerItem1LeftBox}>
            <div>
              <h5>Your Balance</h5>
              <p>23</p>
            </div>
            <div>
              <h5>Total Orders</h5>
              <p>23</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
