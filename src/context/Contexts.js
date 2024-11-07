// ThemeContext.js
import React from "react";
import utils from "../utils/utils";

const ThemeContext = React.createContext(
  utils.getLocalStorage("theme") || "light"
);
const UserContext = React.createContext(null);
const PnrContext = React.createContext(null);

const Context = {
  ThemeContext,
  UserContext,
  PnrContext,
};
export default Context;
