/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
/**User Registration Page */
import signup from "../../static/img/signup.gif"
import { useContext } from "react";
import Context from "../../context/Contexts";
import constants from "../../utils/contants"
import axios from "axios";


function Register() {
    /**User Registration Page */
    const registerUser = async (data) => {
        try {
            const response = await axios.post(constants.accountsUrl, data)
            console.log(response)
            console.log(response.data)
        } catch (err) {
            console.error(err);
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            first_name: event.target.first_name.value,
            username: event.target.username.value,
            email: event.target.email.value,
            password: event.target.password.value,
            confirm_password: event.target.confirm_password.value
        }
        registerUser(data)
    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200 pt-5">
                <div className="drop-shadow-xl w-full rounded-md flex justify-between items-stretch">
                    <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
                        <img
                            src={signup}
                            alt="login"
                            className="h-[500px]"
                        />
                    </div>
                    <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
                        <h1 className="text-center text-2xl sm:text-3xl font-semibold">
                            Create Account
                        </h1>
                        <form method="POST" onSubmit={handleSubmit} role="form" className="w-full mt-5 sm:mt-8">
                            <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
                                <input
                                    type="text"
                                    placeholder="Enter Your First Name"
                                    name="first_name"
                                    className="input input-bordered input-primary w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Enter Username"
                                    name="username"
                                    className="input input-bordered input-primary w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Enter Your Email"
                                    name="email"
                                    className="input input-bordered input-primary w-full"
                                />
                                <input
                                    type="Password"
                                    placeholder="Choose Your Password"
                                    name="password"
                                    className="input input-bordered input-primary w-full"
                                />
                                <input
                                    type="Password"
                                    placeholder="Confirm Password"
                                    name="confirm_password"
                                    className="input input-bordered input-primary w-full"
                                />
                                <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                                    <button role="button" type="submit" className="btn btn-active btn-primary btn-block max-w-[200px]">
                                        Sign Up
                                    </button>
                                    <a href="/login" role="button" className="btn btn-outline btn-primary btn-block max-w-[200px]">
                                        Sign In
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Register;