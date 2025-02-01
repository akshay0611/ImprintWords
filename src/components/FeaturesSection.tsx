import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faShare, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const FeaturesSection = () => {
  const features = [
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
  ];

  return (
    <section id="features" className="py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto text-center px-6 max-w-6xl">
        <h3 className="text-5xl font-bold text-gray-800 mb-12 animate-fade-in-down">
          Why Choose {" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
            ImprintWords
          </span>
          ?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
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
  );
};

export default FeaturesSection;
