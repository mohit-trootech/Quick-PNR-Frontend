/**React Utilities */

const updateLocalStorage = (key, value) => {
  /**Update Browser's LocalStorage Value */
  window.localStorage.setItem(key, value);
};

const getLocalStorage = (key) => {
  /**Get Browser's Local Storage Item */
  return window.localStorage.getItem(key);
};


const utils = {
  updateLocalStorage,
  getLocalStorage,
};
export default utils;
