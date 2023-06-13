import RootLayout from "./layouts/RootLayout";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Home from "./pages/Home";
import CurrentUser from "./pages/CurrentUser";
import ErrorPage from "./pages/ErrorPage";
import QueryPosition from "./pages/QueryPosition";
import RequireAuth from "./components/RequireAuth";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import "./interceptors/axios";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        {/* {public routes} */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        {/* {protected routes} */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/query-position" element={<QueryPosition />}></Route>
          <Route path="/me" element={<CurrentUser />}></Route>
        </Route>
        <Route path="/error/:message" element={<ErrorPage />} />
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
