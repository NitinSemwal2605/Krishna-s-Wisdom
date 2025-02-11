import { Menu, X } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-200 bg-gray-900/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            
            <img
              src="https://i.postimg.cc/2SQSFzDb/flute.png" 
              alt="Krishna's Wisdom Logo"
              className="h-8 w-8 rounded-full" 
            />
            <span className="text-xl font-bold text-white">
              Krishna's Wisdom
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-purple-500 cursor-pointer">
              Home
            </Link>
            <a href="#about" className="text-gray-300 hover:text-purple-500 cursor-pointer">
              About
            </a>
            <a href="#contact" className="text-gray-300 hover:text-purple-500 cursor-pointer">
              Contact
            </a>
            <Link
              to="/chat"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer"
            >
              Start Chat
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-4 text-white cursor-pointer"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-white hover:bg-purple-500 hover:text-white cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-white hover:bg-purple-500 hover:text-white cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-white hover:bg-purple-500 hover:text-white cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Link
                to="/chat"
                className="block px-3 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Chat
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
