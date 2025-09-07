import React from "react";

interface HeaderProps {
  name: string;
  title: string;
  email: string;
  mobile: string;
}

const Header: React.FC<HeaderProps> = ({ name, title, email, mobile }) => {
  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/robertoleonarduzzi", "_blank");
  };

  return (
    <header
      className="mb-8"
      role="banner"
      aria-label="Informazioni personali e contatti"
    >
      <div className="text-center lg:text-left">
        <h1 className="text-3xl font-bold text-gray-900 mb-2" id="main-heading">
          {name}
        </h1>
        <h2
          className="text-xl text-gray-600 mb-4"
          aria-describedby="main-heading"
        >
          {title}
        </h2>

        <address
          className="not-italic"
          role="contentinfo"
          aria-label="Informazioni di contatto"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-2 sm:gap-6 text-sm text-gray-500">
            {/* Email */}
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href={`mailto:${email}`}
                className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                aria-label={`Invia email a ${email}`}
              >
                {email}
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                href={`tel:${mobile.replace(/\s/g, "")}`}
                className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                aria-label={`Chiama il numero ${mobile}`}
              >
                {mobile}
              </a>
            </div>

            {/* LinkedIn Button */}
            <button
              onClick={handleLinkedInClick}
              className="group flex items-center space-x-3 bg-blue-600/20 hover:bg-blue-600 text-blue-700 hover:text-white px-6 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-blue-400/30"
              aria-label="Apri profilo LinkedIn"
            >
              <svg
                className="w-5 h-5 group-hover:animate-pulse"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                  clipRule="evenodd"
                />
              </svg>
              <span>LinkedIn</span>
            </button>
          </div>
        </address>
      </div>
    </header>
  );
};

export default Header;
