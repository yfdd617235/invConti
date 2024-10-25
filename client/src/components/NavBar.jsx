import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  ArrowRightOnRectangleIcon,
  AdjustmentsHorizontalIcon,
  ClipboardDocumentCheckIcon,
  ArrowLeftOnRectangleIcon,
  UserPlusIcon,
  Bars3Icon
} from "@heroicons/react/24/outline";
import { ADMIN } from '../projects';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white h-16 fixed top-0 w-full py-0 z-50 shadow-md">
      <div className="flex justify-between items-center h-full px-10">
        {/* Logo */}
        <Link to="/">
          <div className="h-12 overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}logoIC.webp`}
              alt="PPI"
              className="h-full w-full object-cover object-center scale-125"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center">
          <Link to="/about" className="font-bold hover:text-blue-900 relative group">
            Quiénes somos
            <span className="block h-[2px] w-0 bg-blue-900 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/clients" className="font-bold hover:text-blue-900 relative group">
            Nuestros clientes
            <span className="block h-[2px] w-0 bg-blue-900 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/services" className="font-bold hover:text-blue-900 relative group">
            Servicios
            <span className="block h-[2px] w-0 bg-blue-900 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/contact" className="text-white hover:bg-blue-900 relative group bg-slate-800 rounded-md p-1 px-2">
            Contacto
          </Link>
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
            <Link to="/about" onClick={closeMenu} className="font-bold hover:text-blue-900">
              Quiénes somos
            </Link>
            <Link to="/clients" onClick={closeMenu} className="font-bold hover:text-blue-900">
              Nuestros clientes
            </Link>
            <Link to="/services" onClick={closeMenu} className="font-bold hover:text-blue-900">
              Servicios
            </Link>
            <Link to="/contact" onClick={closeMenu} className="text-white bg-slate-800 rounded-md p-1 px-2 hover:bg-blue-900">
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
