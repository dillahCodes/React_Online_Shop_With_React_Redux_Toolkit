import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/login-form";
import authServices from "../services/auth-services";

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formValue, setFormValue] = useState({
    userName: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const handleOnchange = (e, key) => {
    const value = e.target.value;
    setFormValue((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formValue.userName || !formValue.password) {
      return setErrorMessage("please fill in all input");
    }

    try {
      const response = await authServices.login(formValue.userName, formValue.password);
      localStorage.setItem("userTokenFakeStore", JSON.stringify(response.data.token));
      navigate("/home");
    } catch (error) {
      setErrorMessage(error.response?.data || "An error occurred during login");
      console.error("error during login", error.response?.data);
    }
  };

  return (
    <LoginForm
      handleSubmit={handleSubmit}
      errorMessage={errorMessage}
      handleOnchangeUserName={(e) => handleOnchange(e, "userName")}
      handleOnchangePassword={(e) => handleOnchange(e, "password")}
    />
  );
};

export default LoginPage;
