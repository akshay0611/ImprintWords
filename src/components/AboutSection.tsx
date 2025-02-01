import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagic, faShare, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const AboutSection = () => {
  const features = [
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
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto text-center px-6 max-w-6xl">
        <h3 className="text-5xl font-bold text-gray-800 mb-8 animate-fade-in-down">
          About
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
            {" "}ImprintWords
          </span>
        </h3>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed animate-fade-in-up">
          ImprintWords is a creative platform that helps individuals and businesses design captivating quotes and
          graphics to inspire their audiences. We provide tools that are both powerful and easy to use, making
          creativity accessible to everyone.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
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
  );
};

export default AboutSection;
