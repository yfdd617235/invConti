import { useState } from "react";
import { Link } from "react-scroll"; // Cambiado a react-scroll para desplazamiento suave
import {
  ArrowRightOnRectangleIcon,
  AdjustmentsHorizontalIcon,
  ClipboardDocumentCheckIcon,
  ArrowLeftOnRectangleIcon,
  UserPlusIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { ADMIN } from '../projects';
import { useTranslation } from 'react-i18next';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-white h-16 fixed top-0 w-full py-0 z-50 shadow-md">
      <div className="flex justify-between items-center h-full px-10">
        {/* Logo */}
        <Link to="home" smooth={true} duration={1000} className="cursor-pointer">
          <div className="h-14">
            <img
              src={`${import.meta.env.BASE_URL}logoIC.webp`}
              alt="PPI"
              className="h-full w-full object-contain object-center "
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center">
          <Link to="about" smooth={true} duration={1000} className="cursor-pointer font-bold hover:text-blue-900 relative group">
            {t('navbar.whoweare')}
            <span className="block h-[2px] w-0 bg-blue-900 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="clients" smooth={true} duration={1000} className="cursor-pointer font-bold hover:text-blue-900 relative group">
            {t('navbar.ourcustomers')}
            <span className="block h-[2px] w-0 bg-blue-900 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="services" smooth={true} duration={1000} className="cursor-pointer font-bold hover:text-blue-900 relative group">
            {t('navbar.services')}
            <span className="block h-[2px] w-0 bg-blue-900 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="contact" smooth={true} duration={1000} className="cursor-pointer text-white hover:bg-blue-900 relative group bg-slate-800 rounded-md p-1 px-2">
            {t('navbar.contact')}
          </Link>
          <div>
            <button onClick={() => changeLanguage('en')} className="mr-1">
              <img src={`${import.meta.env.BASE_URL}enFlag.png`} alt="English" className="w-4 h-4" />
            </button>
            <button onClick={() => changeLanguage('es')} className="">
              <img src={`${import.meta.env.BASE_URL}esFlag.png`} alt="Español" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hamburger Menu Icon for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <Bars3Icon className="h-8 w-8 text-gray-800" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50">
          <div className="flex flex-col space-y-4 px-8 py-6">
            <Link to="about" smooth={true} duration={1000} onClick={closeMenu} className="font-bold hover:text-blue-900">
              {t('navbar.whoweare')}
            </Link>
            <Link to="clients" smooth={true} duration={1000} onClick={closeMenu} className="font-bold hover:text-blue-900">
              {t('navbar.ourcustomers')}
            </Link>
            <Link to="services" smooth={true} duration={1000} onClick={closeMenu} className="font-bold hover:text-blue-900">
              {t('navbar.services')}
            </Link>
            <Link to="contact" smooth={true} duration={1000} onClick={closeMenu} className="text-white bg-slate-800 rounded-md p-1 px-2 hover:bg-blue-900">
              {t('navbar.contact')}
            </Link>
            <div>
              <button onClick={() => changeLanguage('en')} className="mr-1">
                <img src={`${import.meta.env.BASE_URL}enFlag.png`} alt="English" className="w-4 h-4" />
              </button>
              <button onClick={() => changeLanguage('es')} className="">
                <img src={`${import.meta.env.BASE_URL}esFlag.png`} alt="Español" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
