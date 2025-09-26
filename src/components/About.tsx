import logo from "./pictures/logo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src={logo}
              alt="ICS Logo"
              className="absolute inset-0 w-full h-full object-contain bg-white"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Indian Cultural Services
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Indian Cultural Services aims to create a space where people can find pujaris and mandirs in their local area.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We believe in creating an amazing experience for those looking to engage in community spaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
