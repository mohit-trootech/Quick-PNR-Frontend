// ThemeContext.js
import React from "react";
import utils from "../utils/utils";

const ThemeContext = React.createContext(
  utils.getLocalStorage("theme") || "light"
);


const Context = {
  ThemeContext,
};
export default Context;
