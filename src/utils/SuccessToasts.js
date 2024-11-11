/**React Toastify Success Toast */
import { SuccessToast } from "./ToastPromiseHandling";
import { updateLocalStorage } from "./utils";
export const UpdatePasswordSuccess = (id, message) => {
  SuccessToast(id, message.message);
};
export const userRegister = (id, response) => {
  SuccessToast(id, response.message);
};
export const userLogin = (id, response) => {
  updateLocalStorage("access", response.access);
  updateLocalStorage("refresh", response.refresh);
  SuccessToast(id, response.message);
};

export const userLogout = (id, response) => {
  SuccessToast(id, response.message);
};
export const FetchUserProfile = (id, response) => {
  SuccessToast(id, response.message);
};
export const UpdateUserEmail = (id, response) => {
  SuccessToast(id, response.message);
};
export const VerifyEmail = (id, response) => {
  SuccessToast(id, response.message);
};
export const OtpGenerated = (id, response) => {
  SuccessToast(id, response.message);
};
export const forgotPasswordOtpSentSuccess = (id, response) => {
  SuccessToast(id, response.message);
};
export const forgotPasswordOtpValidateSuccess = (id, response) => {
  SuccessToast(id, response.message);
};
