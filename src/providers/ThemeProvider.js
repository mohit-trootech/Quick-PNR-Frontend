// ThemeProvider.js
import React, { useState } from "react";
import Context from "../context/Contexts";
import utils from "../utils/utils";

const ThemeProvider = ({ children }) => {
  let [theme, setTheme] = useState(utils.getLocalStorage("theme") || "light");

  const updateTheme = (event) => {
    setTheme((theme = event.target.value));
    utils.updateLocalStorage("theme", theme);
  };

  return (
    <Context.ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </Context.ThemeContext.Provider>
  );
};

export default ThemeProvider;
