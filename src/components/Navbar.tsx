import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="/ICS/" className="text-2xl font-bold text-red-600">Indian Cultural Services</a>
          <div className="hidden md:flex space-x-8">
            <Link to="/mandirs" className="text-gray-800 hover:text-red-600">Mandirs</Link>
            <Link to="/services" className="text-gray-800 hover:text-red-600">Services</Link>
            <Link to="/pandits" className="text-gray-800 hover:text-red-600">Pandits</Link>
            <Link to="/contact" className="text-gray-800 hover:text-red-600">Contact</Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-red-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a href="#about" className="block px-3 py-2 text-gray-800 hover:text-red-600">About</a>
          <a href="#booking" className="block px-3 py-2 bg-red-600 text-white rounded-md">Book Now</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
