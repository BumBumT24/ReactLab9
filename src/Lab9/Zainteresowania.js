// Home/page.js
import { Link } from "react-router-dom";
import '../nav.css';
function Zainteresowania() {
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
      <h1>Zainteresowania</h1>
      <div style={{backgroundColor: "#C5C3C6", margin: "200px", marginLeft: "400px", marginRight: "400px"}}>
        <p>Interesuję się szeroko pojętą kulturą, szczególnie filmami i grami komputerowymi. Lubię również spędzać czas na świeżym powietrzu, uprawiając sport i odkrywając nowe miejsca. Moje zainteresowania obejmują także programowanie i naukę nowych technologii.</p>
      </div>
      
    </div>
  );
}

export default Zainteresowania;
