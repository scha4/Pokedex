import { Navbar, Typography } from "@material-tailwind/react";
import Searchbar from "./Searchbar";

export default function Header() {
  return (
    <Navbar className="mx-auto max-w-full px-4 py-3">
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
        <img src="../pokeball.png" className="w-10" />
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="lg:mr-4 ml-2 cursor-pointer py-1.5 hidden"
        >
          Pokemon
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4"></div>
        <Searchbar />
      </div>
    </Navbar>
  );
}
