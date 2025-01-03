import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faMagic, faShare, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg w-full sticky top-0 z-50 transition-all duration-300 ease-in-out">
        <div className="container mx-auto flex items-center justify-between py-4 px-6 max-w-6xl">
          <h1 className="text-3xl font-extrabold text-gray-800 flex items-center">
            <FontAwesomeIcon icon={faPencilAlt} className="text-teal-500 mr-2 transform rotate-12" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
              ImprintWords
            </span>
          </h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-8 text-gray-700">
              <li>
                <a href="#about" className="hover:text-teal-500 transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#features" className="hover:text-teal-500 transition-colors duration-300">Features</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-teal-500 transition-colors duration-300">Testimonials</a>
              </li>
              <li>
                <button
                  className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  onClick={() => navigate('/app')}
                >
                  Use the App
                </button>
              </li>
            </ul>
          </nav>
          <button className="md:hidden text-gray-700 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center text-center py-32 relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506323356513-4a31beba6e92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNyZWF0aXZlJTIwd3JpdGluZ3xlbnwwfHx8fDE2ODMwNzMxMzU&ixlib=rb-4.0.3&q=80&w=1080')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Transform Your Ideas into{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
              Masterpieces
            </span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Create stunning quotes that resonate with your audience, designed to captivate and inspire. Perfect for sharing or cherishing forever!
          </p>
          <button
            className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse"
            onClick={() => navigate('/app')}
          >
            Get Started for Free
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto text-center px-6 max-w-6xl">
          <h3 className="text-4xl font-bold text-gray-800 mb-8">About ImprintWords</h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            ImprintWords is a creative platform that helps individuals and businesses design captivating quotes and graphics to inspire their audiences. We provide tools that are both powerful and easy to use, making creativity accessible to everyone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <FontAwesomeIcon icon={faMagic} className="text-4xl text-teal-500 mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Intuitive Design</h4>
              <p className="text-gray-600">Create beautiful quotes with our easy-to-use interface.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <FontAwesomeIcon icon={faShare} className="text-4xl text-blue-500 mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Instant Sharing</h4>
              <p className="text-gray-600">Share your creations across social media with a single click.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <FontAwesomeIcon icon={faLightbulb} className="text-4xl text-yellow-500 mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Endless Inspiration</h4>
              <p className="text-gray-600">Access a vast library of quotes and ideas to spark your creativity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto text-center px-6 max-w-6xl">
          <h3 className="text-4xl font-bold text-gray-800 mb-12">Why Choose ImprintWords?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Customizable Designs', desc: 'Choose from a variety of templates to suit your style.', icon: faPencilAlt },
              { title: 'Easy Sharing', desc: 'Seamlessly share your creations across social platforms.', icon: faShare },
              { title: 'Inspiration Library', desc: 'Access a vast collection of ideas and quotes.', icon: faLightbulb },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <FontAwesomeIcon icon={feature.icon} className="text-4xl text-teal-500 mb-4" />
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto text-center px-6 max-w-6xl">
          <h3 className="text-4xl font-bold text-gray-800 mb-12">What Our Users Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'James', text: 'ImprintWords made sharing quotes so easy!', img: 'https://randomuser.me/api/portraits/men/45.jpg' },
              { name: 'Sophia', text: 'The customizable designs are a game-changer!', img: 'https://randomuser.me/api/portraits/women/32.jpg' },
              { name: 'Arjun', text: 'A fantastic tool for creativity.', img: 'https://randomuser.me/api/portraits/men/76.jpg' },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-20 h-20 mx-auto rounded-full mb-4 border-4 border-teal-500"
                />
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-600 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h3 className="text-4xl font-bold mb-6">Ready to Start Creating?</h3>
          <p className="text-xl mb-8">
            Join ImprintWords today and begin designing inspiring quotes that leave an impact.
          </p>
          <button
            className="bg-white text-teal-500 font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            onClick={() => navigate('/app')}
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold flex items-center">
                <FontAwesomeIcon icon={faPencilAlt} className="text-teal-500 mr-2" />
                ImprintWords
              </h2>
              <p className="mt-2 text-gray-400">Inspiring creativity, one quote at a time.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <a href="#about" className="hover:text-teal-500 transition-colors duration-300">About</a>
              <a href="#features" className="hover:text-teal-500 transition-colors duration-300">Features</a>
              <a href="#testimonials" className="hover:text-teal-500 transition-colors duration-300">Testimonials</a>
            </div>
          </div>
          <hr className="my-8 border-gray-800" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">© 2025 ImprintWords. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://github.com/akshay0611" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} className="text-gray-400 hover:text-teal-500 cursor-pointer text-xl transition-colors duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/akshaykumar0611/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} className="text-gray-400 hover:text-teal-500 cursor-pointer text-xl transition-colors duration-300" />
              </a>
              <a href="https://x.com/Aksh0605" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} className="text-gray-400 hover:text-teal-500 cursor-pointer text-xl transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;