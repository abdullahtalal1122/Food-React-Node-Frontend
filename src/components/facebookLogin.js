import { FacebookProvider, LoginButton } from "react-facebook";
import axios from "axios";
import { useNavigate } from "react-router";
import styles from "./facebook.module.css";
export default function FacebookLogin() {
  const navigate = useNavigate();
  const handleSuccess = async (response) => {
    try {
      const apiResponse = await axios.post(
        "http://localhost:5050/api/v1/vendor/oauth/facebook",
        {
          accessToken: response.authResponse.accessToken,
        }
      );

      const token = apiResponse.data.Token;
      if (token) {
        localStorage.setItem("token", token);
        navigate("/");
      } else {
        console.error("Error:", response.data);
      }
    } catch (error) {
      console.error("Error making API call:", error);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <FacebookProvider appId="992483481965029">
      <LoginButton
        scope="email"
        onError={handleError}
        onSuccess={handleSuccess}
        className={styles.facebookbutton}
      >
        Facebook
      </LoginButton>
    </FacebookProvider>
  );
}
