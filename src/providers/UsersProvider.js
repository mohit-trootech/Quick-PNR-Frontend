// UsersProvider.js
// import React, { useState } from "react";
import Context from "../context/Contexts";
import { accountsUrl } from "../utils/contants";
import axios from "axios";
import {
  getBearerToken,
  updateLocalStorage,
  removeLocalStorage,
} from "../utils/utils";
import { useState } from "react";
import {
  ExceptionHandling,
  LoadingToast,
  ErrorToast,
  SuccessToast,
} from "../utils/ToastPromiseHandling";

const UsersProvider = ({ children }) => {
  /**Toggle Password Visibility State */
  let id = null;
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState({});
  const toggleState = () => {
    setToggle(!toggle);
  };

  const axiosRequest = async (url, method, data, header, callBack) => {
    let headers = {
      "Content-Type": "multipart/form-data",
    };
    if (header) {
      headers["Authorization"] = header;
    }
    headers["Accept"] = "application/json";
    try {
      let response = await axios({
        method: method,
        url: url,
        data: data,
        headers: headers,
      });
      if (callBack) {
        callBack(response.data);
      }
      return response.data;
    } catch (error) {
      console.error(error);
      if (error.status && error.response.status === 401) {
        logOut();
      } else if (error.status && error.response.status === 400) {
        ExceptionHandling(id, error);
      } else {
        ErrorToast(id, error.message);
      }
    }
  };

  const registerUser = async (data) => {
    id = LoadingToast("Registering User...", {
      onClose: () => {
        window.location.href = "/login/";
      },
    });
    await axiosRequest(
      accountsUrl + "register/",
      "POST",
      data,
      null,
      userRegister
    );
  };
  const loginUser = async (data) => {
    id = LoadingToast("Logging In...", {
      onClose: () => {
        window.location.href = "/"; //Toast on close redirects to home page
      },
    });
    await axiosRequest(accountsUrl + "login/", "POST", data, null, userLogin);
  };
  const userRegister = (response) => {
    SuccessToast(id, response.message);
  };
  const userLogin = (response) => {
    updateLocalStorage("access", response.access);
    updateLocalStorage("refresh", response.refresh);
    SuccessToast(id, response.message);
  };
  const logOut = () => {
    id = LoadingToast("Logging Out...");
    removeLocalStorage("access");
    removeLocalStorage("refresh");
    window.location.href = "/login/";
    SuccessToast(id, "Logged Out Successfully");
  };

  const fetchUserProfile = async () => {
    let response = await axiosRequest(
      accountsUrl + "profile/",
      "GET",
      null,
      getBearerToken(),
      setUser
    );
    setUser(response);
  };

  const updateUserProfile = async (data) => {
    id = LoadingToast("Updating Profile...");
    let response = await axiosRequest(
      accountsUrl + "profile/",
      "PATCH",
      data,
      getBearerToken()
    );
    setUser(response);
    SuccessToast(id, response.message);
  };

  const updateUserEmail = async (data) => {
    id = LoadingToast("Updating Email...");
    await axiosRequest(
      accountsUrl + "update-email/",
      "PATCH",
      data,
      getBearerToken()
    );
    SuccessToast(id, "Email Updated Successfully");
  };
  const verifyUserEmail = async (data) => {
    id = LoadingToast("Verifying Email...");
    await axiosRequest(
      accountsUrl + "verify-email/",
      "POST",
      data,
      getBearerToken()
    );
    SuccessToast(id, "Email Verified Successfully");
  };
  const generateOtp = async () => {
    id = LoadingToast("Generating OTP...");
    await axiosRequest(
      accountsUrl + "verify-email/",
      "GET",
      null,
      getBearerToken()
    );
    SuccessToast(id, "OTP Generated Successfully");
  };

  const data = {
    registerUser,
    loginUser,
    logOut,
    toggleState,
    toggle,
    user,
    setUser,
    fetchUserProfile,
    updateUserProfile,
    updateUserEmail,
    verifyUserEmail,
    generateOtp,
  };

  return (
    <Context.UserContext.Provider value={data}>
      {children}
    </Context.UserContext.Provider>
  );
};

export default UsersProvider;
