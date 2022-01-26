import { Routes, Route } from "react-router-dom";
import './App.css';
import DetailsCharacters from "./components/DetailsCharacters";
import Header from './components/Header';
import Home from './screens/Home'
import { useLocation } from "react-router-dom";


function App() {
  let location = useLocation()
  let backgroundLocation = location.state && location.state.backgroundLocation
  return (
    <div className="App">
      <Header />
      <Routes location={backgroundLocation || location}>
        <Route  path = "/" element={<Home />} />
        <Route path = "/pokemon/:id" element={<DetailsCharacters/>} />
      </Routes>
      {backgroundLocation && (
      <Routes>
        <Route path = "/pokemon/:id" element={<DetailsCharacters/>} />
      </Routes>
      )}
    </div>
  );
}

export default App;
