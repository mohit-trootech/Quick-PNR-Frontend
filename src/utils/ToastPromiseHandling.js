/**Exception Handling Toast*/
import { toast } from "react-toastify";
export const ExceptionHandling = (toast_id, error) => {
  Object.values(error.response.data).forEach((errors) => {
    if (typeof errors == "string") {
      toast.update(toast_id, {
        render: errors,
        type: "error",
        isLoading: false,
        autoClose: 8000,
        draggable: true,
        closeButton: true,
      });
    } else {
      errors.forEach((err) => {
        toast.update(toast_id, {
          render: err,
          type: "error",
          isLoading: false,
          autoClose: 8000,
          draggable: true,
          closeButton: true,
        });
      });
    }
  });
};

export const LoadingToast = (message) => {
  return toast.loading(message);
};

export const ErrorToast = (toast_id, message) => {
  toast.update(toast_id, {
    render: message,
    type: "error",
    isLoading: false,
    autoClose: 8000,
    draggable: true,
    closeButton: true,
  });
};
