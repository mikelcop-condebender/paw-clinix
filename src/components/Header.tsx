import React from "react";
import { Menu } from "./Menu";

const Header: React.FC = () => (
  <header className="bg-[#000] text-white p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">Paw CliniX</h1>
    <Menu />
  </header>
);

export default Header;
