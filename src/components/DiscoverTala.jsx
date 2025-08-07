import discovervdo from '../assets/discovervdo.png'
import playcircle from '../assets/playcircle.png'

export default function DiscoverTala() {
  return (
    <section className="w-full bg-black text-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:space-x-20 space-y-8 md:space-y-0">

        {/* Left Column - Video Section */}
        <div className="relative w-full md:w-1/2">
          <img
            src={discovervdo}
            alt="Video Thumbnail"
            className="w-full h-auto object-cover"
          />
          {/* Play Button Overlay */}
          <button className="absolute inset-0 flex items-center justify-center">
            <img src={playcircle} alt="Play Button" className="w-16 h-16" />
          </button>
        </div>

        {/* Right Column - Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-normal mb-6">
            Discover <span className="text-white font-bold">Tala</span>
          </h2>
          <p className="text-sm md:text-justify leading-relaxed text-gray-300">
            Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining
            the tools and methods of art and art installations interpreting the formative stages
            of the festival. Tala Prattoy’s work emphasis has always been on Durga Puja as a specific
            art genre where the public space is being transformed into an art venue. We are committed
            to make that art global. Tala Prattoy upholds the art aspects of Durga Puja. Essence of
            creativity combining the tools and methods of art and art installations interpreting the
            formative stages of the festival. Tala Prattoy's work emphasis has always been on Durga
            Puja as a specific art genre where the public space is being transformed into an art venue.
            We are committed to make that art global.
          </p>
        </div>

      </div>
    </section>
  )
}
