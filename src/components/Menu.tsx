import React from "react";

export const Menu: React.FC = () => {
  return (
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
  );
};
