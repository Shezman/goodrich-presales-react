import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
export const toaster = (type, msg) => {
  switch (type) {
    case "success":
      return toast.success(msg);

    case "error":
      return toast.error(msg);

    case "warning":
      return toast.warning(msg);

    default:
  }
};
