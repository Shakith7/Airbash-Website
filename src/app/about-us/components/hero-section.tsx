export default function AboutUsHero() {
    return (
      <section className="relative bg-black text-white py-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('/images/about-us-background-image.jpg')",
          }}
        ></div>
  
        {/* Overlay Content */}
        <div className="relative z-10 max-w-8xl mx-auto px-6">
          {/* Title */}
          <h1 className="text-9xl font-bold text-left mb-16">About us</h1>
  
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-primary text-black p-8 rounded-md shadow-lg min-h-[300px] relative overflow-hidden">
              <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
              <p className="text-lg mb-6">
                At AIRBASH, our mission is to create a vibrant space where sports
                bring people together. We aim to inspire active lifestyles and
                foster connections in a family-friendly environment.
              </p>
              {/* Hover Image */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-cover bg-center transition-opacity duration-500"
                style={{
                  backgroundImage: "url('/images/mission-vision.jpg')",
                }}
              ></div>
            </div>
  
            {/* Card 2 */}
            <div className="group bg-primaryCricket text-black p-8 rounded-md shadow-lg min-h-[300px] relative overflow-hidden">
              <h2 className="text-3xl font-bold mb-6">State of the Art Facilities</h2>
              <p className="text-lg mb-6">
                At Airbash, we provide high-quality courts for casual and
                competitive play, advanced simulators and nets for all skill
                levels. A safe supervised zone for kids aged 2-10 and relax with
                refreshments, snacks, and meals.
              </p>
              {/* Hover Image */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-cover bg-center transition-opacity duration-500"
                style={{
                  backgroundImage: "url('/images/facilities.jpg')",
                }}
              ></div>
            </div>
  
            {/* Card 3 */}
            <div className="group bg-primarySim text-black p-8 rounded-md shadow-lg min-h-[300px] relative overflow-hidden">
              <h2 className="text-3xl font-bold mb-6">Building a Thriving Community</h2>
              <p className="text-lg mb-6">
                AIRBASH isn’t just about sports; it’s about creating a space where
                people connect, families grow, and communities thrive.
              </p>
              {/* Hover Image */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-cover bg-center transition-opacity duration-500"
                style={{
                  backgroundImage: "url('/images/community.jpg')",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  