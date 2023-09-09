import React, { Suspense } from "react";
import Loader from "./components/Loader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notfoundcomponent from "./components/Notfoundcomponent";
import PrivateRoute from "./components/PrivateRouter.js";

const Login = React.lazy(() => import("./pages/credantials/Login/Login"));
const Signup = React.lazy(() => import("./pages/credantials/signup/signup"));
const Order = React.lazy(() => import("./pages/orders/order"));
const Dashboard = React.lazy(() => import("./pages/dashboard/Dashboard"));
const Account = React.lazy(() => import("./pages/Account"));
const Menu = React.lazy(() => import("./pages/Menu"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/menu" element={<Menu />} />

          <Route element={<PrivateRoute />}>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/order" element={<Order />} />
          </Route>
          <Route path="/*" element={<Notfoundcomponent />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
