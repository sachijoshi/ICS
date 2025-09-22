import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Indian Cultural Services</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Massachusetts
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                info@indianculturalservices.com
              </p>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Indian Cultural Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;