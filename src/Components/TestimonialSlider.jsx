import { useRef, useEffect } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight, FaStar } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    name: "Arun Kumar",
    text: "EasyInsurance helped me get health insurance within minutes! The process was quick, digital, and completely hassle-free.",
    img: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Vikas",
    text: "I filed a claim online and it got settled faster than I expected. Truly impressed by EasyInsurance’s support!",
    img: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Maya Jha",
    text: "Buying motor insurance was never this easy. The transparent pricing and instant policy made it effortless.",
    img: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    name: "Anuradha",
    text: "I had some questions and their support team was super responsive and helpful. It feels good to be insured with EasyInsurance.",
    img: "https://i.pravatar.cc/100?img=4",
  },
];

const TestimonialSlider = () => {
  const sliderRef = useRef(null);

  // Duplicate testimonials to simulate infinite loop
  const loopedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Start in the middle set (to allow smooth infinite loop in both directions)
    const middle = slider.scrollWidth / 3;
    slider.scrollLeft = middle;
  }, []);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const scrollAmount = direction === "left" ? -350 : 350;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

    setTimeout(() => {
      const slider = sliderRef.current;
      const third = slider.scrollWidth / 3;

      if (slider.scrollLeft <= 0) {
        // reset to middle if we go too far left
        slider.scrollLeft = third;
      } else if (slider.scrollLeft >= third * 2) {
        // reset to middle if we go too far right
        slider.scrollLeft = third;
      }
    }, 500); // wait until smooth scroll ends
  };

  return (
    <div className="relative w-full py-12 px-2 md:px-12 rounded-2xl">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full hover:scale-110 transition"
      >
        <FaCircleChevronLeft className="text-2xl text-primary" />
      </button>

      {/* Cards */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-6 py-6 scroll-smooth scrollbar-hide snap-x snap-mandatory"
      >
        {loopedTestimonials.map((item, index) => (
          <div
            key={index}
            className="snap-center w-[260px] md:w-[350px] bg-white shadow-md hover:shadow-xl transition rounded-2xl p-6 shrink-0"
          >
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded-full mb-4 border-2 border-blue-500"
              />
              <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
              <div className="flex gap-1 text-yellow-500 my-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                "{item.text}"
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full hover:scale-110 transition"
      >
        <FaCircleChevronRight className="text-2xl text-primary" />
      </button>
    </div>
  );
};

export default TestimonialSlider;
