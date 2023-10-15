import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PokeContext = createContext();

const PokeProvider = ({ children }) => {
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    const fetchPoke = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
        );
        setPoke(response.data.results);
      } catch (error) {
        console.error("Error fetching pokemon", error);
      }
    };

    fetchPoke();
  }, []); // Empty dependency array to fetch data only once

  useEffect(() => {
    console.log(poke); // Logging the updated state here
  }, [poke]); // Triggered whenever 'poke' changes

  return (
    <PokeContext.Provider value={{ poke, setPoke }}>
      {children}
    </PokeContext.Provider>
  );
};

export default PokeProvider;
