import { Scissors, Palette, Wind, Sparkles } from "lucide-react";

const services = [
  {
    icon: <Scissors className="w-8 h-8 text-red-600" />,
    title: "Pujas",
    description: "Different services including Satyanarayan puja, Ghrah Pravesh, Car Puja, etc.",
  },
  {
    icon: <Palette className="w-8 h-8 text-red-600" />,
    title: "Mandirs",
    description: "Find different mandirs in the Massachusetts area.",
  },
  {
    icon: <Wind className="w-8 h-8 text-red-600" />,
    title: "Pandits",
    description: "Find different pandits in your local area.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-red-600" />,
    title: "Events",
    description: "Find different cultural events in the area.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-base sm:text-lg text-gray-600">Find different mandirs and pandits in the area</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
