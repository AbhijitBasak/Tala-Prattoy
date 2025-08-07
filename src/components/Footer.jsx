import React from 'react'

export default function Footer() {
  const footerColumns = [
    {
      heading: "Product",
      items: ["Movies", "TV Show", "Videos"],
    },
    {
      heading: "Media Group",
      items: ["Nice Studio", "Nice News", "Nice TV"],
    },
    {
      heading: "Sitemap",
      items: ["About", "Careers", "Press"],
    },
    {
      heading: "Contact",
      items: [
        { icon: "📞", label: "+271 386-647-3637" },
        { icon: "✉️", label: "ourstudio@hello.com" },
        { icon: "📍", label: "8819 Ohio St. South Gate, California 90280" },
      ],
    },
  ];
  return (
    <footer className="bg-[#1e1e1e] text-white py-16 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 justify-between">
        {/* Left Column */}
        <div className="w-full h-full md:w-1/3 bg-[#373737] p-12">
          <div className="mb-4">
            <div className="text-2xl font-bold text-white">Tala Prattoy</div>
          </div>
          <p className="text-sm text-gray-300 mb-6 max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
          </p>
          <div>
            <h4 className="font-semibold mb-2">Join Newsletters</h4>
            <div className="flex items-center bg-[#2c2c2c] rounded-md overflow-hidden w-full max-w-xs">
              <input
                type="email"
                placeholder="Insert your mail here"
                className="bg-transparent px-4 py-2 text-sm text-white w-full focus:outline-none"
              />
              <button className="bg-red-600 px-4 py-2 hover:bg-red-700 transition">
                ➜
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerColumns.map((col, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{col.heading}</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {col.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    {typeof item === "object" ? (
                      <>
                        <span className="mr-2">{item.icon}</span>
                        <span>{item.label}</span>
                      </>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Copyright */}
          {/* <div className="mt-12 flex items-center justify-center text-xs text-gray-500">
            Copyright © 2024 massArt, Designed & Developed Ethically by Ethical Den
          </div> */}
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-xs text-gray-500">
        Copyright © 2024 massArt, Designed & Developed Ethically by Ethical Den
      </div>
    </footer>
  )
}
