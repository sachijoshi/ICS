import banner from "./pictures/banner.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("bookingform"); 
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[90vh] sm:h-[80vh] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
          All of Your Puja Needs
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-6">
          Find a pujari and mandir close to you
        </p>
        <button
          onClick={scrollToBooking}
          className="inline-block bg-red-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md text-lg sm:text-xl font-semibold hover:bg-red-700 transition"
        >
          Request Info
        </button>
      </div>
    </section>
  );
};

export default Hero;
