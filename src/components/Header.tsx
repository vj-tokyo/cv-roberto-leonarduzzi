import React from "react";

interface HeaderProps {
  name: string;
  title: string;
  email: string;
  mobile: string;
}

const Header: React.FC<HeaderProps> = ({ name, title, email, mobile }) => {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold">{name}</h1>
      <h2 className="text-xl text-gray-600">{title}</h2>
      <p className="mt-2 text-sm text-gray-500">
        {email} · {mobile}
      </p>
    </header>
  );
};

export default Header;
