import award from "../assets/award.png";

export default function Award() {
  const awards = [award, award, award, award, award];

  return (
    <section className="w-full bg-black text-white py-16 px-4 ">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">

        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Award</h2>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto">
            Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-48 md:max-w-7xl mx-auto  items-center justify-between">
          {awards.map((logo, index) => (
            <div key={index}>
              <img
                src={logo}
                alt={award}
                className="w-20 md:w-24 "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
