import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-200 bg-mygray">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">¿Quienes somos?</h2>
        <p className="mt-5">
          Hijos del licenciado fabricaron este sitio web con propositos del dia del padre 2021
        </p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Links importantes</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://www.google.com/search?q=que+son+terminos+y+condiciones%3F">
              Terms &amp; Conditions
            </a>
          </li>
          <li>
            <a href="https://www.google.com/search?q=que+es+politica+de+privacidad%3F">
              Politicas de privacidad
            </a>
          </li>
        </ul>
      </div>

      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://google.com">Google</a>
          </li>
          <li>
            <a href="https://twitter.com">Twitter</a>
          </li>
          <li>
            <a href="https://facebook.com">Facebook</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
