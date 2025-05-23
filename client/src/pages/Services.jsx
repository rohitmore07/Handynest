import React from 'react';

const services = [
  { name: '🪚 Carpentry', description: 'Woodwork and furniture repairs' },
  { name: '🔧 Plumbing', description: 'Leaks, taps, and pipeline fixes' },
  { name: '⚡ Electrical', description: 'Wiring, sockets, and appliances' },
  { name: '🧹 Cleaning', description: 'Home and office cleaning services' },
];

const Services = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold mb-6 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h2 className="text-xl font-bold mb-2">{service.name}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
