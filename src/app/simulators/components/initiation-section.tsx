import React from 'react';

const PadelInitiationSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl sm:text-6xl font-medium text-gray-900">
            AIRBASH Simulators Initiation
          </h2>
        </div>

        {/* Right Column */}
        <div className="bg-primary p-6 rounded-lg shadow-md">
          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            Opened in September 2024, the club features a state-of-the-art, 4-court facility
            housed in an 11-meter-high bespoke glass building with stunning views of the River
            Thames. Amenities include a stylish clubhouse, elegant changing rooms, a dedicated
            warm-up zone, a pro-shop, a comfortable lounge, a bar, and a bistro. For inquiries,
            please email{' '}
            <a
              href="mailto:bps@airbash.com"
              className="font-bold text-black hover:underline"
            >
              bps@airbash.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PadelInitiationSection;
