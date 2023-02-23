import React from 'react';

const Footer = () => (
  <div>
    <p className="dark:text-gray-200 text-gray-700 text-center mt-5 mb-12">
      &copy; {new Date().getFullYear() } All rights reserved by NDAS.
    </p>
  </div>
);

export default Footer;
