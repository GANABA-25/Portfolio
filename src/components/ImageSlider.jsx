import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider({ images, id }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="w-full h-full">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-full overflow-hidden">
            <img
              src={image}
              alt={`project-${id}-${index}`}
              className="w-full h-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-100 group-hover:brightness-110"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
