import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";
import gallery7 from "../assets/gallery7.png";
import gallery8 from "../assets/gallery8.png";


export default function Gallery() {

  const galleryImages = [
    { id: 1, image: gallery1, alt: "Gallery image 1" },
    { id: 2, image: gallery2, alt: "Gallery image 2" },
    { id: 3, image: gallery3, alt: "Gallery image 3" },
    { id: 4, image: gallery4, alt: "Gallery image 4" },
    { id: 5, image: gallery5, alt: "Gallery image 5" },
    { id: 6, image: gallery6, alt: "Gallery image 6" },
    { id: 7, image: gallery7, alt: "Gallery image 7" },
    { id: 8, image: gallery8, alt: "Gallery image 8" },
  ];

  return (
   <section className="w-full bg-black text-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
       {/* Header Row */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Learning provides the environment and inspiration to create and exhibit that brings
            people together to build connections to community.
          </p>
        </div>

        {/* Image Grid Section (Flex-Based 4 Rows) */}
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          {/* Row 1: Big Left, Small Right */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-2/3 h-80 overflow-hidden rounded-md">
              <img src={galleryImages[0].image} alt={galleryImages[0].alt} className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/3 h-80 overflow-hidden rounded-md">
              <img src={galleryImages[1].image} alt={galleryImages[1].alt} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Row 2: Small Left, Big Right */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3 h-80 overflow-hidden rounded-md">
              <img src={galleryImages[2].image} alt={galleryImages[2].alt} className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-2/3 h-80 overflow-hidden rounded-md">
              <img src={galleryImages[3].image} alt={galleryImages[3].alt} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Row 3: Big Left, Small Right */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-2/3 h-80 overflow-hidden rounded-md">
              <img src={galleryImages[4].image} alt={galleryImages[4].alt} className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/3 h-80 overflow-hidden rounded-md">
              <img src={galleryImages[5].image} alt={galleryImages[5].alt} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Row 4: Small Left, Big Right */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3 h-80 overflow-hidden rounded-md">
              <img src={galleryImages[6].image} alt={galleryImages[6].alt} className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-2/3 h-80 overflow-hidden rounded-md">
              <img src={galleryImages[7].image} alt={galleryImages[7].alt} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
