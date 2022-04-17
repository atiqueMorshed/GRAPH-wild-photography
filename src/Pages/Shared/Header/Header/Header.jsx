import { useState } from 'react';
import { Link } from 'react-router-dom';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CustomLink from '../CustomLink/CustomLink';
import MenuLinks from '../MenuILinks/MenuLinks';
import HashLink from '../HashLink/HashLink';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="">
      <div className="flex justify-between md:justify-center items-center py-4 w-10/12 mx-auto">
        <div className="hidden md:flex lg:gap-4">
          <CustomLink to="/">Home</CustomLink>
          <HashLink to="/#services" id="services">
            Services
          </HashLink>
        </div>

        <Link to="/">
          <div className="flex flex-col justify-center items-center md:mx-5 lg:mx-20">
            <h1 className="font-montserratSubrayada text-2xl font-semibold">
              GRAPH
            </h1>
            <p className="font-monteCarlo text-xl">Wild Life Photography</p>
          </div>
        </Link>

        <div className="hidden md:flex gap-4">
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/blog">Blog</CustomLink>
          <CustomLink to="/login">Login</CustomLink>
        </div>

        <div className="burger-menu md:hidden">
          <FontAwesomeIcon
            icon={faBars}
            className="w-8 h-8"
            onClick={() => setToggleMenu((prev) => !prev)}
          />
        </div>
      </div>

      {toggleMenu && (
        <div className="nav-links flex flex-col items-center pb-4 mb-8 md:hidden w-9/12 mx-auto">
          <MenuLinks />
        </div>
      )}
    </div>
  );
};

export default Header;
