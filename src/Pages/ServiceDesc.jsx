import React, { useEffect } from 'react'

import Header from '../Components/Header'
import Fotter from '../Components/Fotter'
import { FaCircleCheck } from "react-icons/fa6";
import { useLocation, useParams } from 'react-router-dom';



function ServiceDesc() {


const item=useLocation();

console.log(item, "item")
 const { serviceId } = useParams();
  const service = item.state.item

  if (!service) {
    return <div className="text-center py-20">Service not found</div>;
  }

console.log("service",service)

  return (
    <div>
        <Header />
   
        <div
          className='w-[85%] my-20 mx-auto flex flex-col md:flex-row justify-between gap-[40px]'
        >
                    <img
            className=' md:hidden block w-[600px] h-[170px] rounded-[14px] object-cover'
            src={service.image}
            alt={service.title}
          />
          <div className='flex-1'>
            <h2 className='md:text-[40px] text-[20px] font-bold text-tertiary font-DMSans'>
              {service.title}
            </h2>
            <h3 className="md:text-[18px] font-medium text-[14px] py-6 font-DMSans">
              {service.shortDesc}
            </h3>
            <p className='text-[15px] text-[#666666]'>{service.longDesc}</p>

            <div className='py-10 flex flex-col gap-3'>
              {service.points.map((point, i) => (
                <div key={i} className='flex items-center gap-3'>
                  <FaCircleCheck className='text-[22px] text-secondary' />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className='w-full bg-secondary py-3 text-center text-white cursor-pointer rounded-full'>
              Contact Now
            </div>
          </div>

          <img
            className='w-[600px] md:block hidden h-[600px] object-cover rounded-full'
            src={service.image}
            alt={service.title}
          />
        </div>
   
      <Fotter />
    </div>
  )
}

export default ServiceDesc