import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TreePine, Phone, Mail } from 'lucide-react';

/**
 * Componente Header/Navbar principal
 * Diseño moderno con navegación responsive
 */
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <TreePine className="h-8 w-8 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
            <span className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
              NaturaStay
            </span>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`text-lg font-medium transition-colors ${
                isActive('/') 
                  ? 'text-emerald-600 border-b-2 border-emerald-600' 
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/propiedades"
              className={`text-lg font-medium transition-colors ${
                isActive('/propiedades') 
                  ? 'text-emerald-600 border-b-2 border-emerald-600' 
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Propiedades
            </Link>
            <Link
              to="/nosotros"
              className={`text-lg font-medium transition-colors ${
                isActive('/nosotros') 
                  ? 'text-emerald-600 border-b-2 border-emerald-600' 
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Nosotros
            </Link>
            <Link
              to="/contacto"
              className={`text-lg font-medium transition-colors ${
                isActive('/contacto') 
                  ? 'text-emerald-600 border-b-2 border-emerald-600' 
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Contacto
            </Link>
          </nav>

          {/* Información de contacto */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+57 300 123 4567</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail className="h-4 w-4" />
              <span className="text-sm">info@naturastay.com</span>
            </div>
          </div>

          {/* Botón menú móvil */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-lg font-medium px-4 py-2 rounded-md transition-colors ${
                  isActive('/') 
                    ? 'text-emerald-600 bg-emerald-50' 
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                }`}
                onClick={toggleMenu}
              >
                Inicio
              </Link>
              <Link
                to="/propiedades"
                className={`text-lg font-medium px-4 py-2 rounded-md transition-colors ${
                  isActive('/propiedades') 
                    ? 'text-emerald-600 bg-emerald-50' 
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                }`}
                onClick={toggleMenu}
              >
                Propiedades
              </Link>
              <Link
                to="/nosotros"
                className={`text-lg font-medium px-4 py-2 rounded-md transition-colors ${
                  isActive('/nosotros') 
                    ? 'text-emerald-600 bg-emerald-50' 
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                }`}
                onClick={toggleMenu}
              >
                Nosotros
              </Link>
              <Link
                to="/contacto"
                className={`text-lg font-medium px-4 py-2 rounded-md transition-colors ${
                  isActive('/contacto') 
                    ? 'text-emerald-600 bg-emerald-50' 
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                }`}
                onClick={toggleMenu}
              >
                Contacto
              </Link>
            </nav>
            
            {/* Información de contacto móvil */}
            <div className="mt-6 pt-4 border-t border-gray-200 px-4">
              <div className="flex items-center space-x-2 text-gray-600 mb-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+57 300 123 4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@naturastay.com</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;