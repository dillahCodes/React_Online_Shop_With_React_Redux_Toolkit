import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const RegisterForm = ({ handleSubmit, handleUserNameChange, handleEmailChange, handlePasswordChange, errorMessage }) => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="min-w-[400px] max-w-[500px] border-2 border-black p-3 rounded-md">
        <h1 className="font-bold font-serif capitalize text-lg">register </h1>
        <p className="text-xs capitalize">hi new user please enter your details</p>
        <div className="w-full border-2 border-black rounded-full mt-1" />

        {errorMessage && <p className="text-sm text-red-500 font-medium capitalize">{errorMessage}</p>}
        <form className="mt-10 flex flex-col gap-y-2" onSubmit={handleSubmit}>
          <label htmlFor="userName" className="capitalize">
            user name:
          </label>
          <input type="text" id="userName" onChange={handleUserNameChange} placeholder="jhon doe" className="p-2 border w-full  rounded-md border-black" />
          <label htmlFor="email" className="capitalize">
            email:
          </label>
          <input type="email" id="email" onChange={handleEmailChange} placeholder="example@gmail.com" className="p-2 border w-full  rounded-md border-black" />
          <label htmlFor="password" className="capitalize">
            password:
          </label>
          <input type="password" id="password" onChange={handlePasswordChange} placeholder="****" className="p-2 border w-full  rounded-md border-black" />
          <div className="w-full text-xs capitalize">
            <p>
              already have an account?{" "}
              <Link className="font-bold" to="/login">
                login here
              </Link>
            </p>
          </div>
          <button type="submit" className="bg-black text-sm font-bold text-white capitalize font-serif rounded-md py-2">
            register
          </button>
          <p className="text-xs capitalize">
            visit{" "}
            <a className="font-bold" target="_blank" href="https://fakestoreapi.com/users">
              here
            </a>{" "}
            to get list of users
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleUserNameChange: PropTypes.func,
  handleEmailChange: PropTypes.func,
  handlePasswordChange: PropTypes.func,
  errorMessage: PropTypes.string,
};
