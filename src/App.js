import { Route, Routes } from "react-router-dom";
import "./css/styles.css";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
