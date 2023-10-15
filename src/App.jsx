import { Route, Routes } from "react-router";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./Views/Home";
import Pokemones from "./Views/Pokemones";
import "bootstrap/dist/css/bootstrap.min.css";
import PokeCard from "./components/PokeCard";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemones/:name" element={<PokeCard />} />
      </Routes>
    </div>
  );
}

export default App;
