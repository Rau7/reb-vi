import { RouterProvider } from "react-router-dom";
import { router } from './routers/router'
import { Toaster } from "react-hot-toast";
import "./css/stylev3.css";
import "./css/mobile.scss";
import "./css/mobilesmwidth.scss";
import "./css/mobile500height.scss";
import "./css/mobilexlwidth.scss";

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster containerClassName="toast-container" />
    </>
  );
}

export default App;
