import React from 'react';
import "./Header.css"
const Header = ({ category, title }) => (
  <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
    <p className="text-5xl text-sky-300 title-border mb-5 p-5">{category}</p>

    <p className="text-3xl tracking-tight text-sky-300">{title}</p>
  </div>
);

export default Header;
