import banner from "./pictures/banner.jpg";

const Hero = () => {
  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
            All of Your Puja Needs
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-white mb-6">
            Find a pujari and mandir close to you
          </p>
          <a
            href="#booking"
            className="inline-block bg-red-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md text-lg hover:bg-red-700 transition"
          >
            Request Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

