import React from 'react';

const Header = ({ category, title }) => (
  <div className=" mt-20 mb-5 ml-2">
    <p className="text-lg text-gray-400">{category}</p>
    <p className="text-3xl font-extrabold tracking-tight text-slate-900">
      {title}
    </p>
  </div>
);

export default Header;
