import "./App.css";
import { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Favorites from "./components/Favorites/Favorites";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import { useLocation, useNavigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [access, setAccess] = useState(false);

  const username = "sebas@gmail.com";
  const password = "sebas1234";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);

  function onSearch(text) {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${text}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((estadoAnterior) => [...estadoAnterior, data]);
          navigate("/home");
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  function onClose(id) {
    setCharacters(characters.filter((personaje) => personaje.id !== id));
  }

  const logOut = () => {
    setAccess(false);
    navigate("/");
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut} />}
      <hr></hr>
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
