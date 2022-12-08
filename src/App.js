import { Route, Routes } from "react-router-dom";
import "./css/stylev3.css";
import "./css/mobile.scss";
import "./css/mobilesmwidth.scss";
import "./css/mobile500height.scss";
import "./css/mobilexlwidth.scss";
import Landingv2 from "./pages/Landingv2";
import Contact from "./pages/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landingv2 />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Toaster containerClassName="toast-container" />
    </>
  );
}

export default App;
