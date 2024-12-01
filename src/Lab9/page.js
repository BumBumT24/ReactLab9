
import { Link } from "react-router-dom";
import '../nav.css';
function Lab9() {
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
        <h1>Strona Lab9</h1>
        <div style={{backgroundColor: "#C5C3C6", margin: "200px", marginLeft: "400px", marginRight: "400px"}}>
        <h2>Treść zadania:</h2>
            <p>Zbuduj stronę składającą się z trzech zakładek:
            Lab 7 – tam umieść laboratorium nr 7
            Lab 8 – tam umieść laboratorium nr 8
            Lab 9 – tam umieść stronę z podstronami:
            • o mnie (jako główna )
            • moje zainteresowania
            • ulubiony film (lub gra)
            • kontakt (tu umieszczamy formularz kontaktowy)
            przygotuj także stronę z 404 i wyświetl ją kiedy w przeglądarkę zostanie wpisany
            nieprawidłowy adres URL
            </p>
        </div>
      </div>
    );
  }
  
  export default Lab9;
  