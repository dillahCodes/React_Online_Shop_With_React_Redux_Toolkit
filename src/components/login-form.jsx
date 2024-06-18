import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LoginForm = ({ handleSubmit, handleOnchangeUserName, handleOnchangePassword, errorMessage }) => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="min-w-[400px] max-w-[500px] border-2 border-black p-3 rounded-md">
        <h1 className="font-bold font-serif capitalize text-lg">login</h1>
        <p className="text-xs capitalize">welcome back please enter your credentials</p>
        <div className="w-full border-2 border-black rounded-full mt-1" />

        {errorMessage && <p className="text-sm text-red-500 font-medium capitalize">{errorMessage}</p>}
        <form className="mt-10 flex flex-col gap-y-2" onSubmit={handleSubmit}>
          <label htmlFor="username" className="capitalize">
            user name:
          </label>
          <input onChange={handleOnchangeUserName} type="text" id="username" placeholder="john doe" className="p-2 border w-full rounded-md border-black" />
          <label htmlFor="password" className="capitalize">
            password:
          </label>
          <input type="password" onChange={handleOnchangePassword} id="password" placeholder="*****" className="p-2 border w-full rounded-md border-black" />
          <div className="w-full text-xs capitalize">
            <p>
              don&apos;t have an account?{" "}
              <Link className="font-bold" to="/register">
                register here
              </Link>
            </p>
          </div>
          <button type="submit" className="bg-black text-sm font-bold text-white capitalize font-serif rounded-md py-2">
            logIn
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

export default LoginForm;

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleOnchangeUserName: PropTypes.func.isRequired,
  handleOnchangePassword: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};
