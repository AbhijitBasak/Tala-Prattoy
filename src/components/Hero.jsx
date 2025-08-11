import banner from "../assets/banner.png";

export default function Hero() {
  return (
    <section className="relative w-full h-full bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-center px-4">
        {/* Background Image */}
        <img
          src={banner}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Bottom Blur Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

        {/* Content Overlay */}
        <div className="absolute md:bottom-45 flex flex-col justify-center items-center text-center text-white px-4 z-10">

          {/* Heading */}
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 relative">
            Tala Prattoy
          </h1>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-white text-red-600 font-semibold text-sm py-2 px-4 rounded-md hover:bg-gray-200 transition">
              Art Walkthrough
            </button>
            <button className="border border-red-600 text-white font-semibold text-sm py-2 px-4  rounded-md hover:bg-red-600 transition">
              Priviledged Entry
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
