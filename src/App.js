import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaTimes, FaBars } from 'react-icons/fa';

import Home from './components/Home';
import Projetos from './components/Projetos';
import SobreMim from './components/SobreMim';

// Componente de link personalizado para reutilização
const NavLink = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`relative px-4 py-2 transition-all duration-300 group ${isActive ? 'text-amber-400' : 'text-white hover:text-amber-300'}`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-400 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
    </Link>
  );
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="App bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex flex-col">
        {/* Navbar Premium */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-gray-900/90 backdrop-blur-md shadow-xl' : 'py-4 bg-transparent'}`}>
          <div className="container mx-auto px-6 flex justify-between items-center">
            {/* Logo/Nome */}
            <Link 
              to="/" 
              className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"
              onClick={closeMenu}
            >
              João Rossi
            </Link>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <NavLink to="/" onClick={closeMenu}>Home</NavLink>
              <NavLink to="/projetos" onClick={closeMenu}>Projetos</NavLink>
              <NavLink to="/sobre-mim" onClick={closeMenu}>Sobre Mim</NavLink>
              
              {/* Divisor visual */}
              <span className="h-6 w-px bg-gray-600 mx-2"></span>
              
              {/* Ícones redes sociais */}
              <div className="flex space-x-4 ml-2">
                <a href="https://github.com/joaorossiferreira" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/joão-rossi-7311a0301/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  <FaLinkedin size={20} />
                </a>
                <a href="mailto:joaovitorvenou@gmail.com" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>

            {/* Botão Mobile */}
            <button
              className="md:hidden text-gray-300 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              {menuOpen ? (
                <FaTimes size={24} className="text-amber-400" />
              ) : (
                <FaBars size={24} />
              )}
            </button>
          </div>

          {/* Menu Mobile */}
          <div className={`md:hidden bg-gray-900/95 backdrop-blur-lg overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 py-4' : 'max-h-0'}`}>
            <div className="container mx-auto px-6 flex flex-col space-y-4">
              <NavLink to="/" onClick={closeMenu}>Home</NavLink>
              <NavLink to="/projetos" onClick={closeMenu}>Projetos</NavLink>
              <NavLink to="/sobre-mim" onClick={closeMenu}>Sobre Mim</NavLink>
              
              <div className="flex justify-center space-x-6 pt-4 border-t border-gray-800">
                <a href="https://github.com/joaorossiferreira" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/joão-rossi-7311a0301/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  <FaLinkedin size={24} />
                </a>
                <a href="mailto:joaovitorvenou@gmail.com" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Conteúdo principal com padding para não ficar atrás da navbar */}
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/sobre-mim" element={<SobreMim />} />
          </Routes>
        </main>

        {/* Footer Premium */}
        <footer className="bg-gray-900/80 backdrop-blur-md py-6 border-t border-gray-800">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} João Vitor Rossi Ferreira. Todos os direitos reservados.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://github.com/joaorossiferreira" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/joão-rossi-7311a0301/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <FaLinkedin size={18} />
              </a>
              <a href="mailto:joaovitorvenou@gmail.com" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;