import React from "react";

interface HeaderProps {
  name: string;
  title: string;
  email: string;
  mobile: string;
}

const Header: React.FC<HeaderProps> = ({ name, title, email, mobile }) => {
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
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span aria-hidden="true">📧</span>
              <a
                href={`mailto:${email}`}
                className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                aria-label={`Invia email a ${email}`}
              >
                {email}
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span aria-hidden="true">📱</span>
              <a
                href={`tel:${mobile.replace(/\s/g, "")}`}
                className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                aria-label={`Chiama il numero ${mobile}`}
              >
                {mobile}
              </a>
            </div>
          </div>
        </address>
      </div>
    </header>
  );
};

export default Header;
