import React, { useEffect, useRef, useState } from 'react'
import Header from '../../Components/Header'
import { MdPercent } from "react-icons/md";
import { CiAlarmOn, CiCalendar } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

import { HiX } from "react-icons/hi";

import {  Loader2 } from 'lucide-react';
import { FcBusinessman, FcDisclaimer, FcOnlineSupport, FcSmartphoneTablet, FcUnlock } from "react-icons/fc";


import { FcGlobe } from "react-icons/fc";
import { Link } from 'react-router-dom';
import Fotter from '../../Components/Fotter';
import TestimonialSlider from '../../Components/TestimonialSlider';
import Form from '../../Components/Form';

const services = [
  {
    title: "Health & Wellness Plans",
    shortDesc: "Personalized health insurance for individuals, families & senior citizens — with OPD, maternity, and cashless claims.",
    longDesc:
      "We go beyond basic medical coverage to offer you a complete health and wellness ecosystem. Whether you’re a young professional, a growing family, or a senior citizen, our plans are designed to offer peace of mind through every phase of life. Experience seamless healthcare with cashless hospitalization, OPD coverage, wellness rewards, and personalized care — all under one plan.",
    image: "/Images/health.jpg",
    points: [
      "Covers individuals, families, and senior citizens",
      "Includes OPD, maternity, and daycare treatments",
      "Cashless hospitalization at 10,000+ network hospitals",
      "Add-ons for mental health, alternative medicine (Ayush), and wellness rewards",
      "Annual health checkups and chronic illness support"
    ]
  },
  {
    title: "Life & Term Insurance",
    shortDesc: "Secure your family’s financial future with flexible life cover & investment-linked plans.",
    longDesc:
      "Our Life & Term Insurance policies offer comprehensive coverage and future planning. Choose between term policies for high protection or ULIPs for life cover with investment growth. Riders for critical illness, accidental death, and flexible payout options ensure your family is secured, even when you’re not around.",
    image: "/Images/Life.jpg",
    points: [
      "Flexible term & ULIP options",
      "Affordable premiums, high cover",
      "Accidental death and illness riders",
      "Tax benefits under 80C and 10(10D)",
      "Lump sum or staggered income payouts"
    ]
  },
  {
    title: "Vehicle Insurance",
    shortDesc: "Instant motor insurance with zero paperwork. Covers private & commercial vehicles.",
    longDesc:
      "From bikes to SUVs and commercial vehicles, our motor insurance offers quick coverage with zero paperwork. Enjoy peace of mind with cashless garage repairs, roadside assistance, and add-ons like Zero Depreciation and Engine Protection — all with instant online issuance.",
    image: "/Images/vechicle.webp",
    points: [
      "Covers all vehicles — private & commercial",
      "Instant digital policy, no paperwork",
      "Zero Depreciation & Engine Protect add-ons",
      "24x7 Roadside Assistance",
      "Cashless claims at 7,000+ garages"
    ]
  }
];

const steps = [
  {
    number: 1,
    image:<FcDisclaimer/>,
    title: "97.6% Claim Settlement",
    desc: "Fast, fair, and transparent"
  },
  {
    number: 2,
     image:<FcGlobe/>,
    title: "Pan-India Reach",
    desc: "Serving clients in 200+ cities"
  },
  {
    number: 3,
     image:<FcUnlock/>,
    title: "Data-Backed Customization",
    desc: "Policies crafted using AI-powered risk profiling"
  },
  {
    number: 3,
     image:<FcOnlineSupport/>,
    title: "24/7 Claim Support",
    desc: "Because emergencies don't wait"
  },
  {
    number: 3,
     image:<FcBusinessman/>,
    title: "Certified Experts",
    desc: "IRDAI licensed advisors, not bots"
  },
  {
    number: 3,
     image:<FcSmartphoneTablet/>,
    title: "100% Digital Onboarding",
    desc: "No agent chasing, no paperwork"
  },
];

const ourServices = [
  { name: "Business Development", url: "https://buttar.hk/services/" },
  { name: "Tax Consultancy", url: "https://buttar.hk/services/" },
  { name: "Sino India Services", url: "https://buttar.hk/services/" },
  { name: "Secretarial Services", url: "https://buttar.hk/services/" },
  { name: "Special Services", url: "#" },
  {
    name: "Audit & Accounting",
    url: "https://buttar.hk/audit-and-accounting/",
  },
  {
    name: "Representative Office in China",
    url: "https://buttar.hk/representative-office-in-china/",
  },
  { name: "Banking & Finance", url: "https://buttar.hk/banking-finance/" },
  { name: "Visa & Immigration Services", url: "https://buttar.hk/visa/" },
  {
    name: "Company Formation in Hong Kong",
    url: "https://buttar.hk/hong-kong-company-formation/",
  },
];



function Home() {


 useEffect(() => {
    // Extract target id from state if passed via navigation
    const hash = window.history.state?.usr?.scrollTarget;
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);


  return (
    <div className="">
      <Header />
      {/* Launch Your Hong Kong Business */}

      <div id="Home" className="relative select-none">
        <div className="absolute top-0 left-0 w-full  h-[90%] bg-primary z-0" />

        <div className="relative z-10  px-[20px] md:px-[100px]">
          <div className="md:flex justify-between gap-[30px] md:py-[80px] py-[50px]">
            <h2 className="md:w-[50%] text-white font-DMSans md:text-[53px] text-[30px] md:text-left text-center font-medium leading-[1.3] mt-[-5px]">
             Affordable, reliable, and personalized insurance plans — protecting what matters most.
            </h2>
            <div className="md:w-[42%] flex flex-col md:justify-start md:items-start justify-center items-center gap-[24px]">
              <span className="text-white font-DMSans md:text-[18px] text-[14px] md:mt-0 mt-3 md:text-left text-center font-Light leading-[1.3]">
              We go beyond policies. <br/> We offer peace of mind, tailored protection, and a promise — that when life changes, you're covered.
              </span>
              <button
            
                className="text-primary text-center bg-secondary w-fit rounded-full font-DMSans text-[16px] font-normal px-[20px] py-[12px] cursor-pointer"
              >
             Talk to an Advisor
              </button>
              <div className="flex items-center">
                <CiAlarmOn className="text-white text-[20px] mr-2" />
                <span className="text-[14px] font-normal text-white">
                  Takes less than 2 minutes
                </span>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/Images/Launch.png"
          alt=""
          className="w-full relative z-10  px-[20px] md:px-[100px]"
        />
      </div>

      {/* What's Included in Our Secretarial Services? */}

      <div
       id='Services'
        className=" services flex flex-col justify-center items-center md:py-[100px] py-[50px] md:px-[100px] px-[20px] select-none"
      >
        <div className="flex flex-col justify-center items-center gap-[12px]">
          <h2 className="md:text-[48px] text-[26px] font-DMSans font-medium text-tertiary text-center">
           What We Provide
          </h2>
          <p className=" md:w-[77%] text-center md:text-[18px] text-[14px] font-DMSans font-Light  text-[#666666]">
            Comprehensive legal service, expertly delivered. We provide thorough
            support and guidance for all your legal matters, handled with utmost
            care.
          </p>
        </div>
        <div className="flex flex-wrap  justify-center md:gap-[30px] gap-[40px] md:pt-[80px] pt-[50px]">
          {services.map((service, index) => (
            <Link
to={`/service`}
    state={{item:service}}

            
             key={index}
      
           
              className="flex flex-col    md:gap-[15px] gap-[5px] w-[290px]"
            >
              <img
                className="md:w-[300px]  w-[280px] md:h-[240px] h-[100px] object-cover rounded-[20px]"
                src={service.image}
                alt={service.title}
              />
              <h3 className="md:text-[24px]   md:w-[79%] text-[20px] font-medium text-tertiary font-DMSans">
                {service.title}
              </h3>
              <span className="md:text-[18px] text-[13px] text-[#666666] font-DMSans">
                {service.shortDesc}
              </span>
            </Link>
          ))}
        </div>
      </div>

     {/* why people trust us */}
      <div
       
        className="bg-[#F6F6F6]  flex flex-col gap-[70px] md:py-[100px] py-[50px] md:px-[100px] px-[20px] select-none"
      >
        <div className="flex flex-col justify-center items-center gap-[12px]">
          <h2 className="md:text-[48px] text-[26px] font-DMSans font-medium text-center text-tertiary">
            Why People Trust Us
          </h2>
          <p className=" md:w-[77%] text-center md:text-[18px] text-[14px] font-DMSans font-Light  text-[#666666]">
            Comprehensive legal service, expertly delivered. We provide thorough
            support and guidance for all your legal matters, handled with utmost
            care.
          </p>
        </div>

        <div className="flex flex-wrap justify-between md:gap-y-[30px] gap-y-[20px]">
          {steps.map((step, index) => (
            <div key={index} className="flex   md:gap-[28px] gap-[8px] md:w-[400px]">
              <div className=" md:w-[30px]">
                <div className="  rounded-full text-[45px]  md:w-[48px]  md:h-[48px] w-[35px] h-[35px]  object-cover flex justify-center items-center">
                  {step.image}
                </div>
              </div>
              <div>
                <h3 className="md:text-[24px] text-[18px] font-medium text-tertiary font-DMSans">
                  {step.title}
                </h3>
                <p className="text-[#666666] md:text-[16px] text-[12px] font-DMSans">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

<Form/>

{/* testimonial */}
        <div  className='my-20 md:mx-[100px] mx-[20px] '>
  <h2 className="md:text-[48px]  text-[26px] md:mb-10 font-DMSans font-medium text-center text-tertiary">
          What Our Customer Say
          </h2>
<TestimonialSlider />   
        </div>

    
 <Fotter/>

</div>
  )
}


export default Home