import React, { useContext, useState } from "react";
import { PokeContext } from "../context/PokeContext";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const Pokemones = () => {
  const { poke } = useContext(PokeContext);
  const navigate = useNavigate();
  const [selectedPokemon, setSelectedPokemon] = useState("");

  const handleSelectChange = (e) => {
    setSelectedPokemon(e.target.value);
  };

  const handleButtonClick = () => {
    console.log(selectedPokemon);
    navigate(`/pokemones/${selectedPokemon}`);
  };

  return (
    <div>
      <h2>Selecciona un Pokémon:</h2>
      <div className="divSelect">
        <select defaultValue={"Pokemones"} onChange={handleSelectChange}>
          <option value="Pokemones" disabled>
            Pokemones
          </option>
          {poke.map((pokemon, index) => (
            <option key={index + 1} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </select>
      </div>
      <Button className="btn-dark" onClick={handleButtonClick}>
        Ver Detalle
      </Button>
    </div>
  );
};

export default Pokemones;
