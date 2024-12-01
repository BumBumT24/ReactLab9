import React, { StrictMode, useState } from 'react';
import { Link } from "react-router-dom";
import '../nav.css';

export default function Lab8() {
  const [index1, setIndex1] = useState(1);
  const [style, setStyle] = useState({ color: 'black', backgroundColor: 'white' });
  const [isImageVisible, setImageVisible] = useState(true);
  const [jsonData, setJsonData] = useState(null);
  const [isFileUploaded, setFileUploaded] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  let index = 1;

  function handleClick() {
    index = index + 1;
  }
  function handleClick1() {
    setIndex1(index1 + 1);
    if (index1 >= 3) {
      setIndex1(1);
    }
  }
  function handleMouseOver() {
    setStyle((prevStyle) => ({ ...prevStyle, color: 'blue' }));
  }

  function showImage() {
    setImageVisible(!isImageVisible);
  }

  function loadDataFromJson() {
    const data = {
      title: 'Zadanie JSON',
      description: 'Dane zostały załadowane.',
    };
    setJsonData(data);
  }

  function uploadFile(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setUploadedFile(file);
      setFileUploaded(true);
      console.log("Plik przesyłany: ", file.name);
    }
  }

  function changeStyle() {
    setStyle((prevStyle) => ({
      ...prevStyle,
      backgroundColor: prevStyle.backgroundColor === 'white' ? 'grey' : 'white',
    }));
  }

  return (
    <div className='Strona1'>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start" style={{textAlign: 'center'}}>
        <h1>Laboratorium8</h1>
            <section style={{ padding: '20px', marginBottom: '20px', border: '2px solid #4CAF50', borderRadius: '8px', backgroundColor: '#f0f8f0' }}>
            <h1>Zadanie nr 1</h1>
            <h1>Niepoprawna wersja</h1>
            <button onClick={handleClick} style={buttonStyle}>
                Next
            </button>
            <h2>Zdjecie: {index}</h2>
            <img 
            src={`/zdjecia/zdjecie${index}.jpg`}
            alt={`Zdjęcie ${index}`}
            />
            <StrictMode>
                <h2>Poprawna wersja</h2>
                <button onClick={handleClick1} style={buttonStyle}>
                Next
                </button>
                <h2>Zdjecie: {index1}</h2>
                <img 
                src={`/zdjecia/zdjecie${index1}.jpg`}
                alt={`Zdjęcie ${index1}`}
                />
            </StrictMode>
            </section>
            <section style={{ padding: '20px', marginBottom: '20px', border: '2px solid #2196F3', borderRadius: '8px', backgroundColor: '#e3f2fd' }}>
            <h1>Zadanie nr 2</h1>
            <button onMouseOver={handleMouseOver} style={{ color: style.color }}>
                Najedź na mnie! 
            </button>
            <button onClick={showImage} style={buttonStyle}>
                {isImageVisible ? 'Ukryj obraz' : 'Pokaż obraz'}
            </button>
            {isImageVisible && (
                <img src={`/zdjecia/zdjecie1.jpg`} alt={`Zdjęcie 1`} />
            )}
            <button onClick={loadDataFromJson} style={buttonStyle}>Załaduj dane</button>
            {jsonData && (
                <div>
                <h3>{jsonData.title}</h3>
                <p>{jsonData.description}</p>
                </div>
            )}
            <input type="file" onChange={uploadFile} />
            {isFileUploaded && uploadedFile && (
                <div>
                <p>Plik został przesłany: {uploadedFile.name}</p>
                {uploadedFile.type.startsWith('image/') && (
                    <img
                    src={URL.createObjectURL(uploadedFile)}
                    alt={uploadedFile.name}
                    style={{ width: '300px', height: 'auto', marginTop: '20px' }}
                    />
                )}
                </div>
            )}
            <button onClick={changeStyle} style={style}>
                Zmień styl tła
            </button>
            </section>

        </main>
        </div>
    </div>
  );
}
const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '5px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  margin: '0 auto 15px',
  display: 'block',

};
