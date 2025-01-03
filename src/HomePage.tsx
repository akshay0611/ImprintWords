import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md w-full">
        <div className="container mx-auto flex items-center justify-between py-4 px-6 max-w-6xl">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <FontAwesomeIcon icon={faPencilAlt} className="text-teal-500 mr-2" />
            ImprintWords
          </h1>
          <button
            className="bg-teal-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-teal-600 transition-all"
            onClick={() => navigate('/app')}
          >
            Use the App
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center text-center py-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506323356513-4a31beba6e92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNyZWF0aXZlJTIwd3JpdGluZ3xlbnwwfHx8fDE2ODMwNzMxMzU&ixlib=rb-4.0.3&q=80&w=1080')",
        }}
      >
        <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
          Transform Your Ideas into Masterpieces
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Create stunning quotes that resonate with your audience, designed to captivate and inspire. Perfect for sharing or cherishing forever!
        </p>
        <button
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all"
          onClick={() => navigate('/app')}
        >
          Get Started for Free
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Why Choose ImprintWords?</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { title: 'Customizable Designs', desc: 'Choose from a variety of templates to suit your style.' },
              { title: 'Easy Sharing', desc: 'Seamlessly share your creations across social platforms.' },
              { title: 'Inspiration Library', desc: 'Access a vast collection of ideas and quotes.' },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="w-full sm:w-72 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">What Our Users Say</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: 'James', text: 'ImprintWords made sharing quotes so easy!', img: 'https://randomuser.me/api/portraits/men/45.jpg' },
              { name: 'Sophia', text: 'The customizable designs are a game-changer!', img: 'https://randomuser.me/api/portraits/women/32.jpg' },
              { name: 'Arjun', text: 'A fantastic tool for creativity.', img: 'https://randomuser.me/api/portraits/men/76.jpg' },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="w-full sm:w-72 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all text-center"
              >
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-16 h-16 mx-auto rounded-full mb-4"
                />
                <p className="text-sm text-gray-600 italic mb-2">"{testimonial.text}"</p>
                <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-center sm:text-left">
            Made with ❤️ by Akshay
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="https://github.com/akshay0611" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-gray-400 hover:text-teal-500 cursor-pointer text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/akshaykumar0611/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-gray-400 hover:text-teal-500 cursor-pointer text-xl" />
            </a>
            <a href="https://twitter.com/akshay0605" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-gray-400 hover:text-teal-500 cursor-pointer text-xl" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
