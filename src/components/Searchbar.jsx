import React from "react";

import { Button, Input } from "@material-tailwind/react";
import Axios from "axios";
import { useContext } from "react";
import { searchbarContext } from "../context";

function Searchbar() {
  const { name, setName, setPokemonData } = useContext(searchbarContext);

  const fetchData = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
      setPokemonData(res.data);
    });
  };
  return (
    <div className="relative lg:flex max-w-md gap-2 md:w-1/2 ">
      <Input
        type="search"
        label="Search Pokemon..."
        className="pr-20"
        onChange={(event) => {
          setName(event.target.value);
        }}
        containerProps={{
          className: "min-w-[288px] ",
        }}
      />
      <Button
        size="sm"
        className="!absolute right-1 top-1 rounded bg-red-600  "
        onClick={fetchData}
      >
        Search
      </Button>
    </div>
  );
}

export default Searchbar;
