import { Route, Routes } from "react-router-dom";
import "./css/stylev2.css";
import "./css/mobilev2.css";
import Landing from "./pages/Landing";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;
