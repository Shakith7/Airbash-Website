import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Max Fernando",
    role: "Chair of the Board",
    image: "/images/member1.jpg",
  },
  {
    name: "Max Fernando",
    role: "Chief Padel Supervisor",
    image: "/images/member2.jpg",
  },
  {
    name: "Max Fernando",
    role: "Chief Technology Officer",
    image: "/images/member3.jpg",
  },
  {
    name: "Max Fernando",
    role: "Chief Safety Officer",
    image: "/images/member4.jpg",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto px-6">
        {/* Title */}
        <h2 className="text-6xl font-medium text-black text-center mb-12">
          Meet The Team
        </h2>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-right group"
            >
              {/* Team Member Image */}
              <div className="w-96 h-96 mx-auto rounded-lg overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={475}
                  className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </div>
              {/* Name and Role */}
              <h3 className="text-xl font-semibold mt-4 text-black">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
