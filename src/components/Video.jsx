import video from "../assets/video.png";
import playcircle from "../assets/playcircle.png";

export default function Video() {
  return (
    <section className="w-full bg-black flex justify-center items-center py-16 px-4 md:px-12">
      <div className="relative w-full ">

        {/* Thumbnail Image */}
        <img
          src={video}
          alt="Video Thumbnail"
          className="w-full h-auto object-cover"
        />

        {/* Play Button Overlay */}
        <button className="absolute inset-0 flex justify-center items-center">
          <img src={playcircle} alt="Play Button" className="w-16 h-16" />
        </button>

      </div>
    </section>
  )
}
