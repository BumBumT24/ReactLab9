"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import Card from "./card";
import '../nav.css';
import './lab7.css';

function countReducer(state, action){
  switch(action.type){
    case 'increment':
      return state+1;
    case 'decrement':
      return state-1;
  }
}

const UserContext = React.createContext();

function Lab7(){
  const [count, dispatch] = React.useReducer(countReducer, 0);
  const [user, setUser] = useState({ name: 'Kacper', surname: 'Zawiszewski', year: 2022});
  useEffect(() => {
    console.log('Komponent załadowany');
    return () => {
      console.log('Komponent zdemontowany');
    };
  }, []);

  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const yearRef = useRef(null);

  const changeName = () => {
    setUser((prevUser) => ({
      ...prevUser,
      name: nameRef.current.value,
    }));
  };

  const changeSurName = () => {
    setUser((prevUser) => ({
      ...prevUser,
      surname: surnameRef.current.value,
    }));
  };

  const changeYear = () => {
    setUser((prevUser) => ({
      ...prevUser,
      year: yearRef.current.value,
    }));
  };

  return (
    <div className='Strona1' >
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
        <h1>Laboratorium7</h1>
        <div className='lab7-container'>
            <div className='cialo'>
                <UserContext.Provider value={user}>
                    <main className='glowne'>
                        {}
                        <Card Imie={user.name} Nazwisko={user.surname} Rok_rozpoczecia={user.year} />
                        <div>
                            Licznik: {count}
                            <button onClick={() => dispatch({ type: 'increment' })} className='przycisk'>+</button>
                            <button onClick={() => dispatch({ type: 'decrement' })} className='przycisk'>-</button>
                        </div>
                        <div>
                            <input ref={nameRef} type="text" placeholder="Wpisz nowe imię" className='wejscie' />
                            <button onClick={changeName} className='przycisk'>Zmień imię</button>
                            <input ref={surnameRef} type="text" placeholder="Wpisz nowe nazwisko" className='wejscie'/>
                            <button onClick={changeSurName} className='przycisk'>Zmień nazwisko</button>
                            <input ref={yearRef} type="number" placeholder="Wpisz nowe rok_rozpoczecia" className='wejscie'/>
                            <button onClick={changeYear} className='przycisk'>Zmień rok</button>
                        </div>
                    </main>
                </UserContext.Provider>
            </div>
        </div>
    </div>
  );
};

export default Lab7;