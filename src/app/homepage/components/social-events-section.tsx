"use client";

import Image from "next/image";

const SocialEventsSection = () => {
  return (
    <section className="py-16 bg-whitebg">
      <div className="container mx-auto px-6 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Social Events Section */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-bold uppercase text-black">
            Social Events
          </h2>
          <p className="text-gray-600 text-xl">
            Our love for padel and the people who play it runs deep. This isn&apos;t 
            just ordinary membership, it&apos;s an invitation to become part of the very 
            fabric of the club. For a first-class padel experience. Become a member.
          </p>
          <div className="flex gap-4">
            <a
              href="/learn-more"
              className="px-6 py-3 bg-black text-white font-bold uppercase hover:bg-gray-800 transition"
            >
              Learn More
            </a>
            <a
              href="/get-quote"
              className="px-6 py-3 bg-primary text-black font-bold uppercase hover:bg-white hover:text-lime-500 transition"
            >
              Get a Quote
            </a>
          </div>
        </div>
        <div>
          <Image
            src="/images/social-events-1.jpg"
            alt="Social Events"
            className="rounded-lg shadow-md"
            width={800}
            height={400}
          />
        </div>

        {/* Join Our Club Section */}
        <div>
          <Image
            src="/images/social-events.jpg"
            alt="Join Our Club"
            className="rounded-lg shadow-md"
            width={800}
            height={400}
          />
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-bold uppercase text-black text-right">
            Join Our Club
          </h2>
          <p className="text-gray-600 text-right leading-relaxed text-xl ">
            Our love for padel and the people who play it runs deep.
            This isn&apos;t just ordinary membership, it&apos;s an invitation to
            become part of the very fabric of the club.
            For a first-class padel experience. Become a member.
          </p>
          <div className="flex gap-4 justify-end">
            <a
              href="/get-quote"
              className="px-6 py-3 bg-primary text-black font-bold uppercase hover:bg-white hover:text-lime-500 transition"
            >
              Get a Quote
            </a>
            <a
              href="/become-member"
              className="px-6 py-3 bg-black text-white font-bold uppercase hover:bg-gray-800 transition"
            >
              Become a Member
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialEventsSection;
