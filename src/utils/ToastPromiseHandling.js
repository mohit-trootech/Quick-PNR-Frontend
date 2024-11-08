/**Exception Handling Toast*/
import { toast } from "react-toastify";

const UpdateToast = (toast_id, message, type) => {
  toast.update(toast_id, {
    render: message,
    type: type,
    isLoading: false,
    autoClose: 8000,
    draggable: true,
    closeButton: true,
  });
};
export const ExceptionHandling = (toast_id, error) => {
  Object.values(error.response.data).forEach((errors) => {
    if (typeof errors == "string") {
      UpdateToast(toast_id, errors, "error");
    } else {
      errors.forEach((err) => {
        UpdateToast(toast_id, err, "error");
      });
    }
  });
};

export const LoadingToast = (message, options) => {
  return toast.loading(message, options);
};

export const ErrorToast = (toast_id, message) => {
  UpdateToast(toast_id, message, "error");
};

export const SuccessToast = (toast_id, message) => {
  UpdateToast(toast_id, message, "success");
};
