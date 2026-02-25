<<<<<<< HEAD
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { userName, logout, loginCount } = useContext(AuthContext);

  return (
    <div className="auth-box">
      <h2>Welcome, {userName}</h2>
      <p>You have logged in {loginCount} times</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
=======
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { userName, logout, loginCount } = useContext(AuthContext);

  return (
    <div className="auth-box">
      <h2>Welcome, {userName}</h2>
      <p>You have logged in {loginCount} times</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
>>>>>>> 53d1e463bc7962ac1705ca7a1c856756cd30a6b7
