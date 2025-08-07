import React from 'react'

export default function count() {
  return (
    <section className="w-full bg-black text-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto bg-[#1C1C1C] flex flex-col md:flex-row items-center md:items-start md:space-x-8 space-y-8 md:space-y-0 p-8 px-20 rounded-md">

        {/* Column 1 - Heading + Paragraph (50% width) */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Lorem <span className="text-white">Ipsum</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the
            tools and methods of art and art installations interpreting the formative stages of the festival.
          </p>
        </div>

        {/* Column 2 - Two Counters (25% width) */}
        <div className="w-full md:w-1/4 flex flex-col space-y-6">
          <div>
            <h3 className="text-3xl font-bold text-red-600">500K+</h3>
            <p className="text-sm md:text-base text-gray-300">Existing Partnerships</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-red-600">100K+</h3>
            <p className="text-sm md:text-base text-gray-300">Existing Partnerships</p>
          </div>
        </div>

        {/* Column 3 - Two Counters (25% width) */}
        <div className="w-full md:w-1/4 flex flex-col space-y-6">
          <div>
            <h3 className="text-3xl font-bold text-red-600">5M</h3>
            <p className="text-sm md:text-base text-gray-300">Existing Partnerships</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-red-600">5M</h3>
            <p className="text-sm md:text-base text-gray-300">Award Winning</p>
          </div>
        </div>

      </div>
    </section>
  )
}
