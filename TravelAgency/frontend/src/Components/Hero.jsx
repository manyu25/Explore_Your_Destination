import { useState, useEffect } from "react";

const Hero = () => {
  const destinations = ["Delhi", "Pune", "Nainitaal", "Mumbai", "Goa"];
  const [currentDestination, setCurrentDestination] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDestination((prev) => (prev + 1) % destinations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="hero"
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url("https://www.muchbetteradventures.com/magazine/content/images/2024/04/mount-everest-at-sunset-1.jpg")`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>

      {/* Content */}
      <div
        className="relative text-center text-white px-6"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide drop-shadow-lg">
          Explore Your <span className="text-yellow-500">Destination</span>
        </h1>

        <p className="text-lg md:text-2xl mt-4 font-light tracking-wide">
          Discover breathtaking places and make unforgettable memories.
        </p>

        {/* Book Now Button */}
        <a href="#contact" rel="noopener noreferrer">
          <button className="mt-6 bg-yellow-500 hover:bg-black px-6 py-3 text-lg font-semibold rounded-md shadow-lg transition-transform transform hover:scale-110 tracking-wide">
            Book Now
          </button>
        </a>

        {/* Popular Destinations (Auto-Scrolling) */}
        <div className="mt-8 text-xl font-semibold">
          <p>
            Popular Destinations:{" "}
            <span className="text-yellow-400">
              {destinations[currentDestination]}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
