import React, { Suspense } from "react";
import Loader from "./components/Loader";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Login = React.lazy(() => import("./pages/Login/Login"));
const Signup = React.lazy(() => import("./pages/signup/signup"));
const Order = React.lazy(() => import("./pages/orders/order"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
