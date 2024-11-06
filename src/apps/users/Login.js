/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
/**User Login Page */
import login from "../../static/img/login.gif";
import { useContext } from "react";
import Context from "../../context/Contexts";

function Login() {
  /**User Login Page */
  const { loginUser, toggleState, toggle } = useContext(Context.UserContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    loginUser(data);
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200 pt-5">
        <div className="drop-shadow-xl w-full rounded-md flex justify-between items-stretch">
          <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0 my-auto">
            <h1 className="text-center text-2xl sm:text-3xl font-semibold">
              Login into Your Account
            </h1>
            <form
              method="post"
              onSubmit={handleSubmit}
              role="form"
              className="w-full mt-5 sm:mt-8"
            >
              <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  name="email"
                  className="input input-bordered input-primary w-full"
                />
                <input
                  type={toggle ? "text" : "password"}
                  placeholder="Choose Your Password"
                  name="password"
                  className="input input-bordered input-primary w-full"
                />
                <div className="form-control">
                  <label className="label cursor-pointer justify-start gap-x-4">
                    <input
                      type="checkbox"
                      onClick={toggleState}
                      className="toggle toggle-primary"
                    />
                    <span className="label-text">Show Password</span>
                  </label>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                  <a
                    role="button"
                    href="/register/"
                    className="btn btn-outline btn-primary btn-block max-w-[200px]"
                  >
                    Sign Up
                  </a>
                  <button
                    type="submit"
                    role="button"
                    className="btn btn-primary btn-block max-w-[200px]"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
            <img src={login} alt="login" className="h-[500px]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
