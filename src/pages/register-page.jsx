import { useEffect, useState } from "react";
import RegisterForm from "../components/register-form";
import authServices from "../services/auth-services";

const RegisterPage = () => {
  const [formValue, setFormValue] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

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

    const isFromValid = Object.values(formValue).some((value) => value === "");
    if (isFromValid) return;

    try {
      const respose = authServices.register(formValue.email, formValue.password, formValue.userName);
      return respose.data;
    } catch (error) {
      console.error("error during register".error);
    }
  };

  return (
    <RegisterForm
      handleSubmit={handleSubmit}
      errorMessage={errorMessage}
      handleEmailChange={(e) => handleOnchange(e, "email")}
      handlePasswordChange={(e) => handleOnchange(e, "password")}
      handleUserNameChange={(e) => handleOnchange(e, "userName")}
    />
  );
};

export default RegisterPage;
