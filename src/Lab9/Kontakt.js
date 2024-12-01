// Home/page.js
import { Link } from "react-router-dom";
import '../nav.css';
function Kontakt() {
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
      <h1>Kontakt</h1>
      <div style={{backgroundColor: "#C5C3C6", margin: "200px", marginLeft: "400px", marginRight: "400px", textAlign: "center"}}>
        <p>Numer Telefonu: 123 456 789</p>
        <p>Mail: qwerty@qwerty.pl</p>
        
      </div>
    </div>
  );
}

export default Kontakt;
