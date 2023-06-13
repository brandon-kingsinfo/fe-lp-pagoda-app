import { useEffect, useState } from "react";
import axios from "axios";

const CurrentUser = () => {
  const [err, setErr] = useState();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("auth/current_user", {
          withCredentials: true,
        });
        console.log(`is_manager? ${data.is_manager}`);
        if (data.is_manager === "Y") {
          setErr("塔牌位查詢主管");
        } else {
          setErr("塔牌位查詢人員");
        }
      } catch (err) {
        console.log(`ERROR CODE: ${err.code}, ERROR MESSAGE: ${err.message}`);
        setErr(err.message);
      }
    })();
  }, []);
  return (
    <div>
      <p>Current User</p>
      <p>{err}</p>
    </div>
  );
};

export default CurrentUser;
