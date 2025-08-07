import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
export default function About() {
  return (
    <section className="w-full bg-black text-white py-26 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Item 1: Heading + Paragraph */}
        <div>
          <h2 className="text-4xl md:text-5xl font-normal mb-6">
            About <span className="text-white font-bold">Tala</span>
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining
            the tools and methods of art and art installations interpreting the formative stages
            of the festival. Tala Prattoy’s work emphasis has always been on Durga Puja as a specific
            art genre where the public space is being transformed into an art venue. We are committed
            to make that art global.Tala Prattoy upholds the art aspects of Durga Puja. Essence of
            creativity combining the tools and methods of art and art installations interpreting the
            formative stages of the festival. Tala Prattoy’s work emphasis has always been on
            Durga Puja as a specific art genre where the public space is being transformed into an art venue.
            We are committed to make that art global.
          </p>
        </div>

        {/* Item 2: Image */}
        <div>
          <img
            src={about1}
            alt="Artwork 1"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Item 3: Image */}
        <div>
          <img
            src={about2}
            alt="Artwork 2"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Item 4: Image */}
        <div>
          <img
            src={about3}
            alt="Artwork 3"
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  )
}
