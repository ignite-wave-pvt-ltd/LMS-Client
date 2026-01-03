import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-600">
        © {new Date().getFullYear()} GenAI Academy — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
