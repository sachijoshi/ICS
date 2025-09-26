import logo from "./pictures/logo.jpg";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
            <img
              src={logo}
              alt="Om Logo"
              className="w-full h-full object-contain bg-white"
            />
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Indian Cultural Services
            </h2>
            <p className="text-gray-600 mb-4 sm:text-lg">
              Indian Cultural Services aims to create a space where people can find pujaris and mandirs in their local area.
            </p>
            <p className="text-gray-600 mb-6 sm:text-lg">
              We believe in creating an amazing experience for those who are looking to engage in spaces for their families within the community.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-red-600">500+</span>
                <span className="text-gray-600">Happy Clients</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-red-600">10+</span>
                <span className="text-gray-600">Years Experience</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-red-600">5⭐</span>
                <span className="text-gray-600">Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
