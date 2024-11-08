import React from "react";

const Header: React.FC = () => (
  <header className="bg-teal-500 text-white p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">Paw CliniX</h1>
    <nav>
      <a href="/" className="px-3 hover:underline">
        Home
      </a>
      <a href="/services" className="px-3 hover:underline">
        Services
      </a>
      <a href="/about" className="px-3 hover:underline">
        About Us
      </a>
      <a href="/contact" className="px-3 hover:underline">
        Contact
      </a>
    </nav>
  </header>
);

export default Header;
