import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Vipul Mishra",
    role: "Travel Enthusiast",
    text: "This was an unforgettable experience! Everything was well organized, and the guides were amazing. Highly recommend!",
  },
  {
    name: "Abhimanyu Tripathi",
    role: "Adventure Seeker",
    text: "I had the best time! The itinerary was perfect, and every moment was filled with excitement and breathtaking views.",
  },
  {
    name: "Pratyush Mishra",
    role: "Solo Traveler",
    text: "Absolutely loved this trip! Great accommodations, friendly staff, and incredible locations. Can't wait for my next adventure!",
  },
  {
    name: "Sonali Kashyap",
    role: "Nature Lover",
    text: "The best trip of my life! Everything was well managed, and I got to see some of the most breathtaking landscapes.",
  },
  {
    name: "Piyush Mishra",
    role: "Explorer",
    text: "An extraordinary trip! The landscapes, the people, and the adventures were beyond my expectations. Would do it again!",
  },
];

export default function Testimonials() {
  return (
    <div id="testimonials" className="bg-sky-100 py-20">
      <h2 className="text-5xl font-bold text-gray-800 text-center mb-6">
        What Our Travelers Say
      </h2>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-10 px-6 w-max py-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[rgb(51,120,115)] p-6 rounded-xl shadow-md w-80 flex-shrink-0"
            >
              <FaQuoteLeft className="text-2xl text-gray-400 mb-2" />
              <p className="text-white italic">{testimonial.text}</p>
              <FaQuoteRight className="text-2xl text-gray-400 mt-2" />
              <h3 className="text-white mt-4 text-lg font-semibold">
                {testimonial.name}
              </h3>
              <p className="text-white text-sm">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
