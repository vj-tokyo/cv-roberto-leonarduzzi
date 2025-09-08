import React from "react";
import Section from "./Section";

interface Client {
  title: string;
  image: string;
}

interface ClientsSectionProps {
  clients: Client[];
}

const ClientsSection: React.FC<ClientsSectionProps> = ({ clients }) => {
  return (
    <Section title="Clients I worked with" variant="card">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {clients.map((client, index) => (
          <div
            key={index}
            className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-4 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/90 flex flex-col items-center justify-center aspect-square"
          >
            {/* Logo */}
            <div className="w-full h-full flex items-center justify-center mb-2">
              <img
                src={client.image}
                alt={`${client.title} logo`}
                className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                loading="lazy"
              />
            </div>

            {/* Nome Cliente */}
            {/* <h4 className="text-xs font-medium text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300 mt-auto">
              {client.title}
            </h4> */}

            {/* Decorative gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ClientsSection;
