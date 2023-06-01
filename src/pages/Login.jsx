import { useEffect, useState } from "react";
import liff from "@line/liff";
import useAuth from "../hooks/useAuth";
import { Box, Button } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const { auth, setAuth } = useAuth();
  const [err, setErr] = useState();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await liff.init({
        liffId: "1657915317-z24n5exd",
      });
      console.log("liff initialized");
      if (liff.isLoggedIn()) {
        console.log("liff logged in");
        try {
          const profile = await liff.getProfile();
          setAuth({ user: profile.userId });
          navigate(from, { replace: true });
        } catch (err) {
          console.log(err.code, err.message);
          setErr(err.message);
        }
      }
    })();
  }, []);

  const handleLineLogin = () => {
    try {
      if (!liff.isLoggedIn()) {
        liff.login();
      }
    } catch (err) {
      console.log(err.code, err.message);
      setErr(err.message);
    }
  };

  return auth.user ? (
    <></>
  ) : (
    <Box
      sx={{
        maxW: "300px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        gap: "15px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>塔牌位查詢</h3>
      <Button size="sm" colorScheme="teal" onClick={handleLineLogin}>
        使用 Line 登入
      </Button>
      {err}
    </Box>
  );
};

export default Login;
