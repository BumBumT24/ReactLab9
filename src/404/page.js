import { Link } from "react-router-dom";
import '../nav.css';

function Page404() {
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
      <h1>Błąd strona 404</h1>
      <p>Error 404</p>
    </div>
  );
}

export default Page404;
