import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import DetailsCharacters from "./components/DetailsCharacters";
import Header from "./components/Header";
import Home from "./screens/Home";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import useModal from "./components/useModal";

function App() {
  const [isActive, setIsActive] = useState(false);
  const { isShowing, toggle } = useModal();

  let location = useLocation();
  let navigate = useNavigate();
  let backgroundLocation = location.state && location.state.backgroundLocation;

  const retourFunc = () => {
    toggle();
    navigate(-1);
    setIsActive(!isActive);
  };

  return (
    <div className="App">
      <Header />
      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<DetailsCharacters />} />
      </Routes>
      {backgroundLocation && (
        <Routes>
          <Route path="/pokemon/:id" element={<DetailsCharacters />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
