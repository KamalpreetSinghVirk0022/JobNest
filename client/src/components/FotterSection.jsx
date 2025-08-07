import React from 'react'

const FooterSection = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            J<span className="text-orange-500">o</span>bNest
          </h2>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm">
          All right reserved. Copyright @job-portal
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors duration-200"
            aria-label="Google Play Store"
          >
            <div className="w-3 h-3 bg-current rounded-full"></div>
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors duration-200"
            aria-label="Apple App Store"
          >
            <div className="w-3 h-3 bg-current rounded-full"></div>
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors duration-200"
            aria-label="Facebook"
          >
            <div className="w-3 h-3 bg-current rounded-full"></div>
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors duration-200"
            aria-label="Twitter"
          >
            <div className="w-3 h-3 bg-current rounded-full"></div>
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors duration-200"
            aria-label="Instagram"
          >
            <div className="w-3 h-3 bg-current rounded-full"></div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
