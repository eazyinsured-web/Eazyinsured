import React from 'react'
import Header from '../Components/Header'
import Fotter from '../Components/Fotter'
import { FaCircleCheck } from "react-icons/fa6";
import { useLocation, useParams } from 'react-router-dom';

function ServiceDesc() {
  const item = useLocation();
  const { serviceId } = useParams();
  const service = item.state?.item;

  if (!service) {
    return <div className="text-center py-20">Service not found</div>;
  }

  return (
    <div>
      <Header />

      <div className="w-[90%] lg:w-[85%] my-10 md:my-20 mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        
        {/* Left Image for Mobile */}
        <img
          className="md:hidden block w-full h-[200px] sm:h-[250px] rounded-xl object-cover"
          src={service.image}
          alt={service.title}
        />

        {/* Text Content */}
        <div className="flex-1 w-full">
          <h2 className="md:text-[40px] text-[22px] font-bold text-tertiary font-DMSans">
            {service.title}
          </h2>
          <h3 className="md:text-[18px] font-medium text-[14px] py-4 md:py-6 font-DMSans">
            {service.shortDesc}
          </h3>
          <p className="text-[15px] text-[#666666] leading-relaxed">
            {service.longDesc}
          </p>

          {/* Points */}
          <div className="py-6 md:py-10 flex flex-col gap-3">
            {service.points.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaCircleCheck className="text-[20px] md:text-[22px] text-[#39dc75] flex-shrink-0" />
                <span className="text-[14px] md:text-[16px]">{point}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="w-full bg-primary py-3 text-center text-white cursor-pointer rounded-full hover:bg-[#39dc75]  transition">
            Contact Now
          </div>
        </div>

        {/* Right Image for Desktop */}
        <img
          className="hidden md:block lg:w-[500px] md:w-[400px] lg:h-[500px] md:h-[400px] object-cover rounded-2xl"
          src={service.image}
          alt={service.title}
        />
      </div>

      <Fotter />
    </div>
  );
}

export default ServiceDesc;
