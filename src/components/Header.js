import "./Header.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  return (
    <div className="nav-style">
      <div className="logoContainer">
        <img
          onClick={() => navigate("/")}
          src={logo}
          className="logo"
          alt="logo"
        ></img>
      </div>
      <div className="holderListeGen">
        <ul className="listeGen">
          <li>Génération 1</li>
          <li>Génération 2</li>
          <li>Génération 3</li>
          <li>Génération 4</li>
          <li>Génération 5</li>
          <li>Génération 6</li>
          <li>Génération 7</li>
          <li>Génération 8</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
