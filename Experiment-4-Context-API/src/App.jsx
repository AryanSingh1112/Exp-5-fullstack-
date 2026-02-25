<<<<<<< HEAD
import { useContext } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { AuthContext } from "./context/AuthContext";
import "./App.css";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="container">
      <h1>Auth Context App</h1>
      {isLoggedIn ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;
=======
import { useContext } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { AuthContext } from "./context/AuthContext";
import "./App.css";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="container">
      <h1>Auth Context App</h1>
      {isLoggedIn ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;
>>>>>>> 53d1e463bc7962ac1705ca7a1c856756cd30a6b7
