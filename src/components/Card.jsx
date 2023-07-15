import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { searchbarContext } from "../context";

export default function PokeCard() {
  const { pokemonData } = useContext(searchbarContext);
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        {/* <img
          src={pokemonData?.sprites.other["official-artwork"].front_default}
        /> */}
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {/* {pokemonData?.name} */}
          Hi
        </Typography>
        <Typography color="blue" className="font-medium" textGradient>
          {/* {pokemonData?.id} */}
          hi
        </Typography>
        <Typography color="blue" className="font-medium" textGradient>
          {/* <p>Type: {pokemonData?.types[0].type.name}</p> */}
          hi
        </Typography>
      </CardBody>
    </Card>
  );
}
