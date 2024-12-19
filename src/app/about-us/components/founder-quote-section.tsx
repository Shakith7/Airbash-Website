import Image from "next/image";

export default function FounderQuote() {
    return (
      <section className="pt-16 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="w-64 h-64 md:w-40 md:h-40 flex-shrink-0 rounded-full overflow-hidden">
            <Image
              src="/images/sandy.jpg"
              alt="Sandy Fernando"
                width={160}
                height={160}
            />
          </div>
  
          {/* Quote */}
          <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
            <p className="text-2xl italic text-gray-700">
              &quot;At AIRBASH, we’ve built more than just a sports arena—we’ve created
              a community where passion for sports meets the joy of connection.
              Our goal is to inspire everyone, from families to professionals, to
              come together and create unforgettable memories.&quot;
            </p>
            <p className="mt-4 text-gray-800 font-semibold">
            — Max , Founder of AIRBASH
            </p>
          </div>
        </div>
      </section>
    );
  }
  