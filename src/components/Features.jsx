import ArtCard from "./ArtCard";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import feature4 from "../assets/feature4.png";

export default function Features() {
  const artItems = [
    {
      id: 1,
      image: feature1,
      title: "Durga Puja Art 2024",
      description: "Tala Prattoy, endeavouring towards global art forever, projects this year’s Durga Puja Art as celebrating the journey of a Durga Puja Artist."
    },
    {
      id: 2,
      image: feature2,
      title: "Watch Art with Artist",
      description: "2024 introduces a never-seen-before guided walkthrough in Tala Prattoy Durga Puja Art venue where visitors enjoy artworks through a smooth walk with a guide."
    },
    {
      id: 3,
      image: feature3,
      title: "Encouraging Craftsmanship",
      description: "Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community."
    },
    {
      id: 4,
      image: feature4,
      title: "Promotion of Installation Art",
      description: "Installation Art is an artistic genre of multi-dimensional works where specific art scenes come alive to see a generation of exquisite artists to emerge."
    }
  ];

  return (
    <section className="w-full bg-black text-white py-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:space-x-20 space-y-8 md:space-y-0">

        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-normal mb-4">
            Objective <span className="text-white font-bold">& features</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Learning provides the environment and inspiration to create and exhibit that brings people together to build <br /> connections to community.
          </p>
        </div>

        {/* Art Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-18">
          {artItems.map((item) => (
            <ArtCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
