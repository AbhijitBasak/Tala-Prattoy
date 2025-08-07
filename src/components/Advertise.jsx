import React from 'react'

export default function Advertise() {
  return (
    <section className="bg-[#1a1a1a] text-white w-full py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between md:items-start md:space-x-8 space-y-8 md:space-y-0 p-8 px-20 rounded-md">

        {/* Left Column: Heading & Paragraph */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            Advertise <span className="font-bold">With Us</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the  
            tools and methods of art and art installations interpreting the formative stages of the festival.
          </p>
        </div>

        {/* Right Column: Button */}
        <div className="md:w-auto flex items-center justify-center">
          <button className="bg-white text-red-600 font-semibold py-2 px-6 rounded-md hover:bg-gray-200 transition">
            Apply Now
          </button>
        </div>

      </div>
    </section>
  )
}
