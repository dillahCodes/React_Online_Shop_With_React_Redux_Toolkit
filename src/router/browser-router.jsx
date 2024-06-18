import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRouter from "./private-router";
import LoginPage from "../pages/login-page";
import RegisterPage from "../pages/register-page";
import HomePage from "../pages/home-page";
import DetailProductPage from "../pages/detail-product-page";

const BrowserRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<PrivateRouter />}>
          <Route path="home" element={<HomePage />} />
          <Route path="product/:productId" element={<DetailProductPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default BrowserRouter;
