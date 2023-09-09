import Label from "./Label";
import Input from "./input";
import Submitbutton from "./Submitbutton";
import { useDispatch } from "react-redux";
import { handlelogin } from "../../../../store/loginAction";
import { ContainerItem2 } from "../../../../styles/loginstyles";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import GoogleLoginComponent from "../../../../components/googleLogin";
import FacebookLogin from "../../../../components/facebookLogin";

const Form = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();
  const HandleLogin = () => {
    if (!email || !password) return;
    dispatch(handlelogin(email, password));
  };
  const { token, error } = useSelector((store) => store.account);
  if (token) localStorage.setItem("token", token);
  if (token) return <Navigate to="/" />;

  return (
    <ContainerItem2>
      <Label name="Marchent ID" />
      <Input type="email" value={email} set={setemail} />
      <Label name="Password" />
      <Input type="password" value={password} set={setpassword} />
      {error ? (
        <p style={{ color: "red" }}>Incorrect email or password.</p>
      ) : (
        <span></span>
      )}
      <Submitbutton handle={HandleLogin} />
      <GoogleLoginComponent style={{ padding: 0, display: "inline-block" }} />

      <FacebookLogin style={{ padding: 0, display: "inline-block" }} />
    </ContainerItem2>
  );
};

export default Form;
