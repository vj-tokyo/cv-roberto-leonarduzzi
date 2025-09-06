import React from "react";
import Section from "./Section";

interface Client {
  name: string;
  logo: string;
  projects: string[];
  years: string;
}

interface ClientsSectionProps {
  clients: Client[];
}

const ClientsSection: React.FC<ClientsSectionProps> = ({ clients }) => {
  return (
    <Section title="Clients & Partners" icon="🤝" variant="card">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clients.map((client, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border border-white/40 rounded-xl p-4 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/90"
          >
            {/* Logo e Nome */}
            <div className="flex items-center space-x-3 mb-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg text-2xl group-hover:scale-110 transition-transform duration-300">
                {client.logo}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                  {client.name}
                </h4>
                <p className="text-xs text-gray-500">{client.years}</p>
              </div>
            </div>

            {/* Progetti */}
            <div className="space-y-1">
              {client.projects.map((project, projectIndex) => (
                <div key={projectIndex} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <span className="text-xs text-gray-600 group-hover:text-gray-700">
                    {project}
                  </span>
                </div>
              ))}
            </div>

            {/* Decorative gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Alternative list view (commented out - you can switch between views) */}
      {/* <div className="space-y-4">
        {clients.map((client, index) => (
          <div
            key={index}
            className="group flex items-start space-x-4 p-4 bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all duration-300 hover:bg-white/80"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl text-2xl group-hover:scale-110 transition-transform duration-300">
              {client.logo}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-lg text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                  {client.name}
                </h4>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {client.years}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {client.projects.map((project, projectIndex) => (
                  <span
                    key={projectIndex}
                    className="text-xs bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-gray-700 px-3 py-1 rounded-full border border-purple-500/20 group-hover:border-purple-500/40 transition-colors"
                  >
                    {project}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </Section>
  );
};

export default ClientsSection;
