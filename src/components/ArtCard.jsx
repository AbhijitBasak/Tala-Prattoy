import React from 'react'

export default function ArtCard({ image, title, description }) {
  return (
    <div className="relative group overflow-hidden rounded-md shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-300"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent p-4">
        <h3 className="text-red-600 text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  )
}
