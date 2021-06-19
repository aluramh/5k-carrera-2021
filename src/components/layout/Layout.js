import React, { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  // too lazy to override gatsby's html.js
  useEffect(() => {
    const [body] = document.getElementsByTagName('body');
    body.classList.add('bg-mygray');
  });

  return (
    <>
      <Header />
      <main className="text-gray-100">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
