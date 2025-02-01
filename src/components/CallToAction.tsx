import React from 'react';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-6 max-w-4xl">
      <h3 className="text-5xl font-bold mb-8 animate-fade-in-down">Ready to Start Creating?</h3>
      <p className="text-2xl mb-12 animate-fade-in-up max-w-3xl mx-auto">
        Join ImprintWords today and begin designing inspiring quotes that leave an impact.
      </p>
      <button
        className="bg-white text-teal-500 text-xl font-semibold px-10 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 hover:bg-gray-100 hover:text-teal-600"
        onClick={() => navigate("/app")}
      >
        Get Started Now
      </button>
      <p className="text-lg text-gray-200 mt-6">
        Have an idea? <span className="text-white font-semibold cursor-pointer hover:underline" onClick={() => navigate("/suggest-new-feature")}>Suggest a feature</span>.
      </p>
    </div>
  );
};

export default CallToAction;
