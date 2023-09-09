import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios"; // Import the axios library
import { useNavigate } from "react-router-dom"; // Import useNavigate

const clientId = `138090815002-r5j12j1f5okmum3bg1e8k7t8biropi83.apps.googleusercontent.com`;

const GoogleLoginComponent = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSuccess = async (credentialResponse) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/vendor/oauth/google",
        {
          credentialResponse,
        }
      );

      // Handle the response from your backend if needed
      const token = response.data.Token;
      if (token) {
        localStorage.setItem("token", token);
        navigate("/");
      }
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginComponent;
