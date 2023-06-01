import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Logout = () => {
  const { setAuth } = useAuth();

  useEffect(() => {
    setAuth({});
    localStorage.clear();
  }, [setAuth]);

  return (
    <div>
      <h3>Logout</h3>
      <p>
        <Link to="/login">Login again</Link>
      </p>
    </div>
  );
};

export default Logout;
