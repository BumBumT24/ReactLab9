
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./nawigajca";
import Lab7 from "./Lab7/page";
import Lab8 from "./Lab8/page";
import Lab9 from "./Lab9/page";
import My from "./Lab9/My";
import Zainteresowania from "./Lab9/Zainteresowania";
import Favorite from "./Lab9/Favorite";
import Kontakt from "./Lab9/Kontakt";
import Page404 from "./404/page";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lab7" element={<Lab7 />} />
        <Route path="/lab8" element={<Lab8 />} />
        <Route path="/lab9" element={<Lab9 />} />
        <Route path="/lab9/Zainteresowania" element={<Zainteresowania />} />
        <Route path="/lab9/Favorite" element={<Favorite />} />
        <Route path="/lab9/My" element={<My />} />
        <Route path="/lab9/Kontakt" element={<Kontakt />} />
        <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
