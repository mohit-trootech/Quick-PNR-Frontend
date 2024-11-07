// ThemeProvider.js
import React, { useState, useContext } from "react";
import Context from "../context/Contexts";
// import utils from "../utils/utils";
import { toast } from "react-toastify";
import constants from "../utils/contants";
import utils from "../utils/utils";
import axios from "axios";
const PnrProvider = ({ children }) => {
  let id = null;
  const [pnrDetails, setPnrDetails] = useState(null);
  const [pnr, setPnr] = useState(null);
  const { logOut } = useContext(Context.UserContext);
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
        callBack(response.data);
      }
      return response.data;
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 401) {
        logOut();
      }
      if (errorHandle) {
        errorHandle(error);
      }
    }
  };
  const pnrValidationError = (error) => {
    /**Handle PNR Validation Error */
    Object.values(error.response.data).forEach((errors) => {
      errors.forEach((error) => {
        toast.update(id, {
          render: error,
          type: "error",
          isLoading: false,
          autoClose: 8000,
          draggable: true,
          closeButton: true,
        });
      });
    });
  };
  /**Fetch PNR Details */
  const fetchPnrDetails = async (data) => {
    /**Fetch PNR Details */
    id = toast.loading("Loading PNR Details...");
    setPnr(data);
    await axiosRequest(
      constants.pnrFetchUrl,
      "POST",
      {
        pnr: data,
      },
      "Bearer " + utils.getLocalStorage("access"),
      fetchPnrCallback,
      pnrValidationError
    );
  };
  const fetchPnrCallback = (response) => {
    /**Fetch PNR Details Callback */
    setPnrDetails(response);
    toast.update(id, {
      render: "PNR Details Loaded",
      type: "success",
      isLoading: false,
      autoClose: 8000,
      draggable: true,
      closeButton: true,
    });
  };
  /**Update PNR Details */
  const handlePnrUpdate = async () => {
    /**Update PNR Details */
    id = toast.loading("Updating PNR Details...");
    await axiosRequest(
      constants.pnrFetchUrl,
      "PATCH",
      {
        pnr: pnr,
      },
      "Bearer " + utils.getLocalStorage("access"),
      updatePnrCallback,
      pnrValidationError
    );
  };
  const updatePnrCallback = (response) => {
    /**Fetch PNR Details Callback */
    setPnrDetails(response);
    toast.update(id, {
      render: "PNR Details Updated",
      type: "success",
      isLoading: false,
      autoClose: 8000,
      draggable: true,
      closeButton: true,
    });
  };
  const data = { pnrDetails, fetchPnrDetails, handlePnrUpdate };
  return (
    <Context.PnrContext.Provider value={data}>
      {children}
    </Context.PnrContext.Provider>
  );
};

export default PnrProvider;
