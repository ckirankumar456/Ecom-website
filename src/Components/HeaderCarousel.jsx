import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function HeaderCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    cssEase: "linear",
  };

  const slides = [
    {
      image: "/Images/slider2.png",
    },
    {
      image: "/Images/slider3.png",
    },
    {
      image: "/Images/slider6.png",
    },
    {
      image: "/Images/slider5.png",
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto p-4" id="slidesImage">
      <Slider key={Date.now()} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} id="img_container">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full rounded-lg"
            />
            <p className="text-lg font-semibold">{slide.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default HeaderCarousel;
