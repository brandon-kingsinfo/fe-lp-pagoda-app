import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  const { message } = useParams();
  return (
    <div>
      <h1>Error Page</h1>
      <p>{message}</p>
      <p>
        <Link to="/login">重新登入</Link>
      </p>
    </div>
  );
};

export default ErrorPage;
