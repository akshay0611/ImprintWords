import type React from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilAlt, faMagic, faShare, faLightbulb } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { Pencil, Paintbrush, Edit, Type, Quote, ImageIcon } from "lucide-react"

// First, let's add some more custom animations to our styles
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
        <header className="bg-white shadow-lg w-full sticky top-0 z-50 transition-all duration-300 ease-in-out">
          <div className="container mx-auto flex items-center justify-between py-4 px-6 max-w-6xl">
            <h1 className="text-3xl font-extrabold text-gray-800 flex items-center">
              <FontAwesomeIcon icon={faPencilAlt} className="text-teal-500 mr-2" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
                ImprintWords
              </span>
            </h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-8 text-gray-700">
                <li>
                  <a href="#about" className="hover:text-teal-500 transition-colors duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-teal-500 transition-colors duration-300">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-teal-500 transition-colors duration-300">
                    Testimonials
                  </a>
                </li>
                <li>
                  <button
                    className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    onClick={() => navigate("/app")}
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
        <section className="w-full py-32 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900">
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
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-6xl md:text-7xl font-extrabold text-white mb-8 leading-tight animate-fade-in-down">
              Transform Your Ideas into{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 animate-gradient-x">
                Masterpieces
              </span>
            </h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-up">
              Create stunning quotes that resonate with your audience, designed to captivate and inspire. Perfect for
              sharing or cherishing forever!
            </p>
            <button
              className="bg-gradient-to-r from-teal-500 to-blue-600 text-white text-xl font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
              onClick={() => navigate("/app")}
            >
              Get Started for Free
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-100">
          <div className="container mx-auto text-center px-6 max-w-6xl">
            <h3 className="text-5xl font-bold text-gray-800 mb-8 animate-fade-in-down">
              About{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
                ImprintWords
              </span>
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed animate-fade-in-up">
              ImprintWords is a creative platform that helps individuals and businesses design captivating quotes and
              graphics to inspire their audiences. We provide tools that are both powerful and easy to use, making
              creativity accessible to everyone.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: faMagic,
                  title: "Intuitive Design",
                  desc: "Create beautiful quotes with our easy-to-use interface.",
                  color: "from-teal-400 to-teal-600",
                },
                {
                  icon: faShare,
                  title: "Instant Sharing",
                  desc: "Share your creations across social media with a single click.",
                  color: "from-blue-400 to-blue-600",
                },
                {
                  icon: faLightbulb,
                  title: "Endless Inspiration",
                  desc: "Access a vast library of quotes and ideas to spark your creativity.",
                  color: "from-yellow-400 to-yellow-600",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`inline-block p-4 rounded-full bg-gradient-to-br ${item.color} mb-6`}>
                    <FontAwesomeIcon icon={item.icon} className="text-4xl text-white" />
                  </div>
                  <h4 className="text-2xl font-semibold text-gray-800 mb-4">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-gradient-to-b from-gray-100 to-white">
          <div className="container mx-auto text-center px-6 max-w-6xl">
            <h3 className="text-5xl font-bold text-gray-800 mb-12 animate-fade-in-down">
              Why Choose{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
                ImprintWords
              </span>
              ?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Customizable Designs",
                  desc: "Choose from a variety of templates to suit your style.",
                  icon: faPencilAlt,
                  color: "from-purple-400 to-purple-600",
                },
                {
                  title: "Easy Sharing",
                  desc: "Seamlessly share your creations across social platforms.",
                  icon: faShare,
                  color: "from-pink-400 to-pink-600",
                },
                {
                  title: "Inspiration Library",
                  desc: "Access a vast collection of ideas and quotes.",
                  icon: faLightbulb,
                  color: "from-green-400 to-green-600",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className={`inline-block p-4 rounded-full bg-gradient-to-br ${feature.color} mb-6`}>
                    <FontAwesomeIcon icon={feature.icon} className="text-4xl text-white" />
                  </div>
                  <h4 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h4>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-gray-100">
          <div className="container mx-auto text-center px-6 max-w-6xl">
            <h3 className="text-5xl font-bold text-gray-800 mb-12 animate-fade-in-down">
              What Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
                Users Say
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "James",
                  text: "ImprintWords made sharing quotes so easy!",
                  img: "https://randomuser.me/api/portraits/men/45.jpg",
                },
                {
                  name: "Sophia",
                  text: "The customizable designs are a game-changer!",
                  img: "https://randomuser.me/api/portraits/women/32.jpg",
                },
                {
                  name: "Arjun",
                  text: "A fantastic tool for creativity.",
                  img: "https://randomuser.me/api/portraits/men/76.jpg",
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <img
                    src={testimonial.img || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-24 h-24 mx-auto rounded-full mb-6 border-4 border-teal-500 shadow-lg"
                  />
                  <p className="text-gray-600 italic mb-6 text-lg">"{testimonial.text}"</p>
                  <h4 className="text-xl font-semibold text-gray-800">{testimonial.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

       {/* Call to Action Section */}
<section className="py-24 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 text-white text-center">
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
</section>

        {/* Footer */}
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
                    icon={faTwitter}
                    className="text-gray-400 hover:text-teal-500 cursor-pointer text-2xl transition-colors duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
          <p className="text-lg text-white mt-4 text-center">Made with ❤️ by Akshay</p>
        </footer>
      </div>
    </>
  )
}

export default HomePage