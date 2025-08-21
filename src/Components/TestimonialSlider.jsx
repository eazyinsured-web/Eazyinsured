import { useRef, useState } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight, FaStar } from "react-icons/fa6";


const testimonials = [
  {
    id: 1,
    name:"Arun  Kumar",
    text: 'EasyInsurance helped me get health insurance within minutes! The process was quick, digital, and completely hassle-free.',
  },
  {
    id: 2,
    name:"Vikas",
    text: 'I filed a claim online and it got settled faster than I expected. Truly impressed by EasyInsurance’s support!',
  },
  {
    id: 3,
    name:"Maya Jha",
    text: 'Buying motor insurance was never this easy. The transparent pricing and instant policy made it effortless.',
  },
  {
    id: 4,
    name:"Anuradha",
    text: 'I had some questions and their support team was super responsive and helpful. It feels good to be insured with EasyInsurance.',
  },
];

const TestimonialSlider = () => {
  const sliderRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const cardWidth = 300 + 24;

  const startScroll = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

  const scrollStep = direction === 'left' ? -250 : 250; // small value for smoother motion
    scrollIntervalRef.current = setInterval(() => {
    container.scrollLeft += scrollStep;
  }, 10); // fast interval for continuous scroll
};

  const stopScroll = () => {
    clearInterval(scrollIntervalRef.current);
  };

  return (
    <div className="w-full relative md:px-8 ">
      {/* Left Arrow */}
      <button 
        onMouseDown={() => startScroll('left')}
        onMouseUp={stopScroll}
        onMouseLeave={stopScroll}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full"
      >
        <FaCircleChevronLeft className="md:text-[28px] md:block hidden ml-1 text-[18px] hover:text-secondary" />
      </button>

      {/* Scrollable Card Container */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-6 py-8 scroll-smooth scrollbar-hide"
      >
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="w-[200px] md:w-[350px] bg-[#f6f6f6] shadow-lg md:p-6 p-3 rounded-[12px] shrink-0"
          >
            <div className="flex md:flex-row flex-col gap-2 justify-between items-center mb-4">
              <h2 className="text-[20px] font-DMSans font-medium">{item.name}</h2>
              <div className="flex  gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar className="text-[14px] md:text-[20px]" key={i} />
                ))}
              </div>
            </div>
            <p className="md:text-left text-center text-[15px] md:text-[18px]">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onMouseDown={() => startScroll('right')}
        onMouseUp={stopScroll}
        onMouseLeave={stopScroll}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full"
      >
        <FaCircleChevronRight className="md:text-[28px] md:block hidden mr-1 text-[18px] hover:text-secondary" />
      </button>
    </div>
  );
};

export default TestimonialSlider;
