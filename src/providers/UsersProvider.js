// UsersProvider.js
// import React, { useState } from "react";
import Context from "../context/Contexts";
import constants from "../utils/contants";
import axios from "axios";
import { toast } from "react-toastify";
import utils from "../utils/utils";
import { useState } from "react";
const UsersProvider = ({ children }) => {
  /**Toggle Password Visibility State */
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState({});
  const toggleState = () => {
    setToggle(!toggle);
  };

  const axiosRequest = async (
    url,
    method,
    data,
    header,
    callBack,
    errorHandle
  ) => {
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
        callBack();
      }
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error(error.response.data);
      console.log(error.response && error.response.status === 401);
      if (error.response && error.response.status === 401) {
        logOut();
      } else {
        toast.error(error.response.data);
      }

      if (errorHandle) {
        errorHandle();
      }
    }
  };

  const registerUser = async (data) => {
    await axiosRequest(constants.accountsUrl + "register/", "POST", data);
    toast.success("User Registered Successfully", {
      onClose: () => {
        window.location.href = "/login/"; //Toast on close redirects to login page
      },
    });
  };
  const loginUser = async (data) => {
    const response = await axiosRequest(
      constants.accountsUrl + "login/",
      "POST",
      data
    );
    utils.updateLocalStorage("access", response.access);
    utils.updateLocalStorage("refresh", response.refresh);
    toast.success("Login Successfully", {
      onClose: () => {
        window.location.href = "/"; //Toast on close redirects to home page
      },
    });
  };

  const logOut = () => {
    utils.removeLocalStorage("access");
    utils.removeLocalStorage("refresh");
    window.location.href = "/login/";
    toast.update("Logged Out Session Expired Login Again to Continue");
  };

  const fetchUserProfile = async () => {
    let response = await axiosRequest(
      constants.accountsUrl + "profile/",
      "GET",
      null,
      "Bearer " + utils.getLocalStorage("access")
    );
    setUser(response);
  };

  const updateUserProfile = async (data) => {
    let response = await axiosRequest(
      constants.accountsUrl + "profile/",
      "PATCH",
      data,
      "Bearer " + utils.getLocalStorage("access")
    );
    setUser(response);
    toast.success("Profile Updated Successfully");
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
  };

  return (
    <Context.UserContext.Provider value={data}>
      {children}
    </Context.UserContext.Provider>
  );
};

export default UsersProvider;
