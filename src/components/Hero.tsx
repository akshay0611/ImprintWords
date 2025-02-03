import React from "react";
import { useNavigate } from "react-router-dom";
import { Pencil, Paintbrush, Edit, Type, Quote, ImageIcon } from "lucide-react";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-32 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900">
      {/* Floating Icons */}
      <div className="absolute inset-0 opacity-20">
        {[Pencil, Paintbrush, Edit, Type, Quote, ImageIcon].map((Icon, index) => (
          <Icon
            key={index}
            size={64}
            className="absolute text-white animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.5}s`,
            }}
          />
        ))}
      </div>

     {/* Hero Content */}
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
  <h2 className="text-6xl md:text-7xl font-extrabold text-white mb-8 leading-tight animate-fade-in-down">
    Welcome,{" "}
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 animate-gradient-x">
      Sonam!
    </span>{" "}
    Let's Transform Your Ideas into Masterpieces
  </h2>
  <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-up">
    This special edition is just for you, Sonam! Dive into a creative space where every quote is designed to inspire, captivate, and leave a lasting impression. Enjoy this exclusive welcome on our website!
  </p>
  <button
    className="bg-gradient-to-r from-teal-500 to-blue-600 text-white text-xl font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
    onClick={() => navigate("/app")}
  >
    Explore Your Special Experience
  </button>
</div>


      {/* Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;