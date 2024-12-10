"use client";


const HeroSection = () => {
  return (
    <section className="relative bg-black text-white h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-athletes.png')", 
        }}
      ></div>
      {/* Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl lg:text-8xl font-bold uppercase leading-tight">
          The <span className="text-lime-400">Ultimate Indoor</span><br/> Sporting Experience
        </h1>
        <p className="text-3xl mt-4 font-medium text-gray-300">
          #Play, <span className="text-lime-400">Connect</span>, & Unwind
        </p>

        {/* Hero Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="/book"
            className="px-6 py-3 bg-lime-400 text-black font-bold uppercase rounded hover:bg-lime-500 transition"
          >
            Book Your Space
          </a>
          <a
            href="/join"
            className="px-6 py-3 border-2 border-lime-400 text-lime-400 font-bold uppercase rounded hover:bg-lime-400 hover:text-black transition"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
