import banner from "./pictures/banner.jpg";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            All of Your Puja Needs
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in-delay">
            Find a pujari and mandir close to you
          </p>
          <a
            href="#booking"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition-colors animate-fade-in-delay-2"
          >
            Request Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
