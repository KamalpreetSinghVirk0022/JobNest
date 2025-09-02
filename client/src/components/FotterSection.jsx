import React from 'react';
import { assets } from '../assets/assets';

// A single icon component for better reusability and cleaner code
const SocialIcon = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:opacity-75 transition-opacity duration-300">
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 w-full border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Logo */}
          <div className="mb-4 md:mb-0">
            <a href="#" className="flex items-center">
              <img src={assets.logo} alt="JobNest Logo" />
            </a>
          </div>

          {/* Center: Copyright Text */}
          <div className="text-sm text-gray-500 text-center dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} JobNest™. All Rights Reserved.
          </div>

          {/* Right Side: Social Media Icons */}
          <div className="flex space-x-5 rtl:space-x-reverse">
            {/* Replace the src in the <img> tags below with the actual paths to your SVG files.
              For example, if your icons are in a public/icons folder, the path would be "/icons/play-store.svg".
            */}
            <SocialIcon href="#">
              <img onClick={() => window.open("https://play.google.com/store", "_blank")} src={assets.play_store} alt="Google Play" className="w-6 h-6" />
              <span className="sr-only">Google Play page</span>
            </SocialIcon>

            <SocialIcon href="#">
               <img onClick={() => window.open("https://www.apple.com/app-store/", "_blank")} src={assets.app_store} alt="Apple App Store" className="w-6 h-6" />
              <span className="sr-only">Apple App Store page</span>
            </SocialIcon>
            
            <SocialIcon href="#">
              <img onClick={() => window.open("https://www.facebook.com", "_blank")} src={assets.facebook_icon} alt="Facebook" className="w-6 h-6" />
              <span className="sr-only">Facebook page</span>
            </SocialIcon>

            <SocialIcon href="#">
              <img onClick={() => window.open("https://www.instagram.com", "_blank")} src={assets.instagram_icon} alt="Instagram" className="w-6 h-6" />
              <span className="sr-only">Instagram community</span>
            </SocialIcon>

            <SocialIcon href="#">
              <img onClick={() => window.open("https://twitter.com", "_blank")} src={assets.twitter_icon} alt="Twitter" className="w-6 h-6" />
              <span className="sr-only">Twitter page</span>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}