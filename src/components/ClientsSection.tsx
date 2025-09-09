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
  // Duplica i clienti per creare l'effetto infinito
  const duplicatedClients = [...clients, ...clients];

  return (
    <Section title="Clients I worked with" variant="card">
      <div className="relative overflow-hidden">
        {/* Container del carosello */}
        <div className="flex animate-infinite-scroll hover:animation-paused">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.title}-${index}`}
              className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/90 flex flex-col items-center justify-center flex-shrink-0 mx-4 w-40 h-32"
            >
              {/* Logo */}
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={client.image}
                  alt={`${client.title} logo`}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>

              {/* Decorative gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Gradient fade sui bordi */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none z-10"></div>
      </div>
    </Section>
  );
};

export default ClientsSection;
