import type React from "react"
import { useNavigate } from "react-router-dom"
import Header from "./components/Header"; 
import Hero from "./components/Hero"; 
import About from "./components/AboutSection"; 
import Features from "./components/FeaturesSection"; 
import Testimonials from "./components/TestimonialsSection"; 
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"

const styles = `
  @keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }
  @keyframes gradient-x {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes scale-in {
    0% { transform: scale(0.9); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .animate-gradient-x {
    animation: gradient-x 15s ease infinite;
    background-size: 200% 200%;
  }
  .animate-scale-in {
    animation: scale-in 0.5s ease-out forwards;
  }
`

const HomePage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
        {/* Header */}
        <Header /> 
      

        {/* Hero Section */}
        <Hero /> 

        {/* About Section */}
        <section id="about" className="py-16 bg-gradient-to-b from-white to-gray-100">
         <About/>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gradient-to-b from-gray-100 to-white">
          <Features/>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-gradient-to-b from-white to-gray-100">
        <Testimonials/>
        </section>

       {/* Call to Action Section */}
<section className="py-24 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 text-white text-center">
<CallToAction /> 
</section>

        {/* Footer */}
       <Footer/>
      </div>
    </>
  )
}

export default HomePage