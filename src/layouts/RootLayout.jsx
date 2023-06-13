import { Outlet } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RootLayout = () => {
  const { auth } = useAuth();
  return (
    <>
      {auth?.user && (
        <Container>
          <div
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: "space-between",
            }}
          >
            <Link to="/query-position">Query Position</Link>
            <Link to="/me">Me</Link>
            <Link to="/logout">Logout</Link>
          </div>
        </Container>
      )}
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default RootLayout;
