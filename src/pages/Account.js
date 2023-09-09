import { useNavigate } from "react-router";
const Account = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <h1>Under Construction</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Account;
