import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-red-600">Indian Cultural Services</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
            <a href="/#about">About</a>
            <Link to="/pandit" className="text-gray-800 hover:text-red-600">Pandit</Link>
            <Link to="/mandirs" className="text-gray-800 hover:text-red-600">Mandirs</Link>
            <a href="/#booking" className="bg-red-600 text-white px-4 py-2 rounded-md">Request Info</a>




          </div>

          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-red-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#services" className="block px-3 py-2 text-gray-800 hover:text-red-600">Services</a>
            <a href="#about" className="block px-3 py-2 text-gray-800 hover:text-red-600">About</a>
            <a href="#gallery" className="block px-3 py-2 text-gray-800 hover:text-red-600">Gallery</a>
            <a href="#booking" className="block px-3 py-2 bg-red-600 text-white rounded-md">Book Now</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;