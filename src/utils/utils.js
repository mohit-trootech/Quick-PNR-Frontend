/**React Utilities */

export const updateLocalStorage = (key, value) => {
  /**Update Browser's LocalStorage Value */
  localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => {
  /**Get Browser's Local Storage Item */
  return localStorage.getItem(key);
};

export const removeLocalStorage = (key) => [
  /**Remove Browser's Local Storage Item */
  localStorage.removeItem(key),
];
export const getBearerToken = () => {
  return "Bearer " + getLocalStorage("access");
};
