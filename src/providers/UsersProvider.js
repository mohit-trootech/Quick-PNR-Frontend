// UsersProvider.js
// import React, { useState } from "react";
import Context from "../context/Contexts";
import constants from "../utils/contants"
import axios from "axios";
const UsersProvider = ({ children }) => {

    const registerUser = async (data) => {
        try {
            const response = await axios.post(constants.accountsUrl, data)
            console.log(response)
            console.log(response.data)
        } catch (err) {
            console.error(err);
            console.error(err.message);
        }
    }

    const data = {
        registerUser
    }

    return (
        <Context.UserContext.Provider value={data}>
            {children}
        </Context.UserContext.Provider>
    );
};

export default UsersProvider;
