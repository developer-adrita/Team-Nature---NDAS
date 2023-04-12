import React from 'react';
import "./Header.css"
const Header = ({ category, title }) => (
  <div className="container py-5 px-5 mx-0 min-w-full flex flex-col items-center">
    <p className="text-3xl text-sky-300 title-border mb-2 p-2">{category}</p>

    <p className="text-1xl tracking-tight text-sky-300">{title}</p>
  </div>
);

export default Header;
