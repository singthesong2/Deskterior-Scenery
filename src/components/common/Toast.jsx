import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toast() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={true}
      closeOnClick={true}
      pauseOnHover={false}
      limit={3}
    />
  );
}

export default Toast;
