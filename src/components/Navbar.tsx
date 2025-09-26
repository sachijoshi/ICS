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

  const linkClass =
    "block px-3 py-2 rounded-md text-base sm:text-sm md:text-base font-medium text-gray-800 hover:text-red-600";

  // Smooth scroll to booking section
  const scrollToBooking = () => {
    const element = document.getElementById("bookingform");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Site Name */}
          <div className="flex-shrink-0">
            <Link to="/">
              <span className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-600">
                Indian Cultural Services
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#services" className={linkClass}>
              Services
            </a>
            <a href="#pandits" className={linkClass}>
              Pandits
            </a>
            <a href="#mandirs" className={linkClass}>
              Mandirs
            </a>
            <button
              onClick={scrollToBooking}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition text-base sm:text-sm md:text-base font-medium"
            >
              Request Info
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-red-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#about" className={linkClass} onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href="#services" className={linkClass} onClick={() => setIsOpen(false)}>
              Services
            </a>
            <a href="#pandits" className={linkClass} onClick={() => setIsOpen(false)}>
              Pandits
            </a>
            <a href="#mandirs" className={linkClass} onClick={() => setIsOpen(false)}>
              Mandirs
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                scrollToBooking();
              }}
              className="block px-3 py-2 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 transition w-full text-left"
            >
              Request Info
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
