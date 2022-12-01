import { Route, Routes } from "react-router-dom";
import "./css/stylev3.css";
import "./css/mobilev3.css";
import Landingv2 from "./pages/Landingv2";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landingv2 />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
