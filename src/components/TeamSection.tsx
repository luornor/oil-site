// src/components/TeamSection.tsx
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  Share2 ,
} from "lucide-react";
import team1 from "/img/team-1.jpg";
import team2 from "/img/team-2.jpg";
import team3 from "/img/team-3.jpg";
import team4 from "/img/team-4.jpg";

const teamMembers = [
  {
    name: "Angela Boateng",
    title: "Logistics Manager",
    image: team1,
  },
  {
    name: "Kwame Nkrumah",
    title: "Operations Lead",
    image: team2,
  },
  {
    name: "Elorm Mensah",
    title: "Fleet Supervisor",
    image: team3,
  },
  {
    name: "Kofi Annan",
    title: "Fleet Supervisor",
    image: team4,
  },
];

const TeamSection = () => {
  return (
    <section className="py-10 px-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
      <div className="text-center mb-12">
          <h6 className="text-blue-400 text-sm font-bold uppercase mb-2">Our Team</h6>
          <h2 className="text-4xl font-bold text-black">Expert Team Members</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 px-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group/card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition relative"
            >
              {/* Image with zoom on card hover */}
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover/card:scale-110"
                />
              </div>

              {/* Name + Title */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-black">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.title}</p>
              </div>

              {/* Red button that expands on hover */}
              <div className="p-4 pt-0">
                <div className="group/social inline-flex items-center bg-red-500 text-white font-medium rounded-full transition-all duration-300 w-10 group-hover/card:w-full overflow-hidden">
                  <div className="flex items-center justify-start w-10 h-10">
                    <Share2  className="w-10 h-5" />
                  </div>
                  <div className="flex items-center gap-3 ml-3 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                    <a href="#"><FacebookIcon className="w-5 h-5" /></a>
                    <a href="#"><TwitterIcon className="w-5 h-5" /></a>
                    <a href="#"><InstagramIcon className="w-5 h-5" /></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
