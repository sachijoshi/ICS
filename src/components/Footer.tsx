import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Indian Cultural Services</h3>
            <p className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" /> Massachusetts
            </p>
            <p className="flex items-center">
              <Mail className="w-5 h-5 mr-2" /> info@indianculturalservices.com
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Indian Cultural Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
