const AboutUs = () => {
  return (
    <section
      id="about%20us"
      className="relative min-h-[80vh] bg-cover bg-center bg-fixed py-40 px-6 md:px-12 flex items-center"
      style={{
        backgroundImage: `url("https://www.travelandleisure.com/thmb/LX4znxqtKQYJ3QPu4ArNCuvJw_s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/seljalandsfoss-iceland-1-WATERFALLS1021-e9c2348a42c841d5b9d661d16dcdcf8c.jpg")`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-5xl mx-auto text-center text-white">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          Discover Your Next Adventure!
        </h2>
        <p className="mt-6 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          At{" "}
          <span className="font-semibold text-yellow-500">
            Explore Your Destination
          </span>
          , we specialize in crafting unforgettable travel experiences. Whether
          you dream of pristine beaches, scenic mountains, or vibrant cities—we
          bring your journeys to life!
        </p>

        {/* Call-to-Action Button */}
        <a href="#Packages" rel="noopener noreferrer">
          <button className="mt-6 bg-yellow-500 hover:bg-black px-6 py-3 text-lg font-semibold rounded-md shadow-lg transition-transform transform hover:scale-110 tracking-wide">
            Explore More
          </button>
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
