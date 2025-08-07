import NewsCard from './NewsCard'
import news1 from '../assets/news1.png'
import news2 from '../assets/news2.png'
import news3 from '../assets/news3.png'
import news4 from '../assets/news4.png'
import news5 from '../assets/news5.png'
import news6 from '../assets/news6.png'

export default function News() {
  const newsItems = [
    {
      id: 1,
      image: news1,
      title: "Encouraging Craftsmanship",
      description:
        "Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.",
    },
    {
      id: 2,
      image: news2,
      title: "Encouraging Craftsmanship",
      description:
        "Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.",
    },
    {
      id: 3,
      image: news3,
      title: "Encouraging Craftsmanship",
      description:
        "Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.",
    },
    {
      id: 4,
      image: news4,
      title: "Encouraging Craftsmanship",
      description:
        "Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.",
    },
    {
      id: 5,
      image: news5,
      title: "Encouraging Craftsmanship",
      description:
        "Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.",
    },
    {
      id: 6,
      image: news6,
      title: "Encouraging Craftsmanship",
      description:
        "Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:space-x-20 space-y-8 md:space-y-0">

        {/* First Row - Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Tala In News</h2>
        </div>

        {/* Second Row - News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <NewsCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
