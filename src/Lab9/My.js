// Home/page.js
import { Link } from "react-router-dom";
import '../nav.css';
function My() {
  return (
    <div className="Strona1">
      <nav className="navbar">
        <ul className="nav-list">
          <li><Link to="/">Strona Główna</Link></li>
          <li><Link to="/lab7">Lab 7</Link></li>
          <li><Link to="/lab8">Lab 8</Link></li>
          <li><Link to="/lab9">Lab 9</Link></li>
          <li><Link to="/lab9/My">Lab 9 O mnie</Link></li>
          <li><Link to="/lab9/Zainteresowania">Lab 9Zainteresowania</Link></li>
          <li><Link to="/lab9/Favorite">Lab 9Favorite</Link></li>
          <li><Link to="/lab9/Kontakt">Lab 9Kontakt</Link></li>
        </ul>
      </nav>
      <h1>O mnie</h1>
      <div style={{backgroundColor: "#C5C3C6", margin: "200px", marginLeft: "400px", marginRight: "400px"}}>
        
        <p>Jestem entuzjastą kina i gier komputerowych. Interesuję się różnymi gatunkami filmowymi oraz produkcjami, które mają głęboką fabułę i świetnie zrealizowane postacie. W grach cenię sobie złożoność, przygodę i możliwość zanurzenia się w bogate światy.</p>
      </div>
    </div>
  );
}

export default My;
