/**React Utilities */

const updateLocalStorage = (key, value) => {
  /**Update Browser's LocalStorage Value */
  localStorage.setItem(key, value);
};

const getLocalStorage = (key) => {
  /**Get Browser's Local Storage Item */
  return localStorage.getItem(key);
};

const removeLocalStorage = (key) => [
  /**Remove Browser's Local Storage Item */
  localStorage.removeItem(key),
];

const utils = {
  updateLocalStorage,
  getLocalStorage,
  removeLocalStorage,
};
export default utils;
