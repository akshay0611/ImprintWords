import React from "react";

const testimonials = [
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
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto text-center px-6 max-w-6xl">
        <h3 className="text-5xl font-bold text-gray-800 mb-12 animate-fade-in-down">
          What Our {" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
            Users Say
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
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
  );
};

export default TestimonialsSection;
