import { useState } from "react";
import Axios from "axios";

import "./index.css";

import Header from "./components/Header";
import Body from "./components/Body";
import { searchbarContext } from "./context";

function App() {
  const [name, setName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  const fetchData = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
      setPokemonData(res.data);
    });
  };

  return (
    <>
      <searchbarContext.Provider
        value={{ name, setName, pokemonData, setPokemonData }}
      >
        <Header />

        <Body />
      </searchbarContext.Provider>
    </>
  );
}

export default App;
