import Loginfooter from "./Loginfooter";
import Loginheader from "./Loginheader";
import Form from "./form/form";
import { BodyWrapper } from "../../styles/loginstyles";
import { Container } from "../../styles/loginstyles";

const Login = () => {
  return (
    <BodyWrapper>
      <Container>
        <Loginheader />
        <Form />
        <Loginfooter />
      </Container>
    </BodyWrapper>
  );
};

export default Login;
