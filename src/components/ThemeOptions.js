/**NavBar Theme Options */
import constants from "../utils/contants";

function Options() {
  /**Daisy UI Themes */
  return (
    <>
      {constants.themes.map((themeOption) => (
        <option key={themeOption} value={themeOption}>
          {themeOption}
        </option>
      ))}
    </>
  );
}

export default Options;
