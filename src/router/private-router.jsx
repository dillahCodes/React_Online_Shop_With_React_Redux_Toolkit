import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { fetchUser } from "../store/auth-slice";
import ScreenLoader from "../components/screen-loader";

const PrivateRouter = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const status = useSelector((state) => state.auth.status);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUser());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (user && location.pathname === "/") navigate("/home");
  }, [location.pathname, navigate, user]);

  if (status === "loading" || status === "idle") return <ScreenLoader />;

  if (!user && status === "failed") return <Navigate to="/login" />;
  if (user && status === "succeeded") return <Outlet />;

  return null;
};

export default PrivateRouter;
