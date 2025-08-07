import React from 'react'

export default function NewsCard({ image, title, description }) {
  return (
    <div className="bg-black text-white">
      <div className="overflow-hidden rounded-lg mb-4">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
      </div>
      <h3 className="text-lg font-semibold text-red-600 mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  )
}
