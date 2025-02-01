import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold flex items-center">
              <FontAwesomeIcon icon={faPencilAlt} className="text-teal-500 mr-3" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                ImprintWords
              </span>
            </h2>
            <p className="mt-3 text-gray-400">Inspiring creativity, one quote at a time.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <a href="#about" className="hover:text-teal-500 transition-colors duration-300 text-lg">
              About
            </a>
            <a href="#features" className="hover:text-teal-500 transition-colors duration-300 text-lg">
              Features
            </a>
            <a href="#testimonials" className="hover:text-teal-500 transition-colors duration-300 text-lg">
              Testimonials
            </a>
          </div>
        </div>
        <hr className="my-10 border-gray-800" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-6 md:mb-0">© 2025 ImprintWords. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="https://github.com/akshay0611" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-gray-400 hover:text-teal-500 cursor-pointer text-2xl transition-colors duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/akshaykumar0611/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-gray-400 hover:text-teal-500 cursor-pointer text-2xl transition-colors duration-300"
              />
            </a>
            <a href="https://x.com/Aksh0605" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-gray-400 hover:text-teal-500 cursor-pointer text-2xl transition-colors duration-300"
              />
            </a>
          </div>
        </div>
      </div>
      <p className="text-lg text-white mt-4 text-center">Made with ❤️ by Akshay</p>
    </footer>
  );
};

export default Footer;