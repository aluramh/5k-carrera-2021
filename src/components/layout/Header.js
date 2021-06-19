import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import ButtonLink from '../ButtonLink';

const Header = () => (
  <header className="sticky top-0 bg-mygray text-gray-100 shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        PowerRaces
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Lugar
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Estadisticas
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Testimonios
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <ButtonLink
          className="text-sm"
          href="mailto:aluramh@gmail.com?subject=5K dia del padre 2021"
        >
          Inscribete ahora!
        </ButtonLink>
      </div>
    </div>
  </header>
);

export default Header;
