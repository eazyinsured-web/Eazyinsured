import React from 'react'
import { LuMail, LuMapPin, LuPhone } from 'react-icons/lu';
import { Link } from 'react-router-dom'




// const quickLinks = ["Home", "About Us", "Services", "Group Companies","Press & Media", "Clients Area", "Forms & Documentations", "Careers", "Contact Us"];
// const quickLinks = [
//   { name: "Home", url: "" },
//   { name: "About Us", url: "" },
//   { name: "Services", url: "" },


  
//   { name: "Contact Us", url: "" },
// ];


const quickLinks = ["Home", "Services", "About", "Contact Us"];









// const socialMedia = ["Facebook", "LinkedIn", "Instagram"];
const socialMedia = [
  { name: "Facebook", url: "" },
  {
    name: "LinkedIn",
    url: "",
  },
  {
    name: "Instagram",
    url: "",
  },
];


  const handleNavClick = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); 
  }
};



const getInTouch = [
  {
    icon: <LuMapPin className='text-[#BDC1C6] text-[18px] mr-1' />,
    text: `1/F, Mau Lam Commercial Building,
16-18 Mau Lam Street, Jordan,
Kowloon, Hong Kong`
  },
  {
    icon: <LuPhone className='text-[#BDC1C6] text-[18px] mr-1' />,
    text: "9812795100"
  },
  {
    icon: <LuMail className='text-[#BDC1C6] text-[18px] mr-1' />,
    text: "easyinsurance@gmail.com"
  },
];

function Fotter() {
  return (
    <div>   {/* Interested? Need a helping hand to decide? */}
      <div className="bg-[#46515C] md:px-[90px] px-[15px]  md:pt-[70px] pt-[60px] flex flex-col justify-center items-center">
        <div className="flex flex-col  gap-[40px] justify-center items-center md:w-[70%] w-full">
          <h3 className="md:text-[70px] text-[30px]  text-white text-center leading-[1.2]">
            Interested? Need a <br /> helping hand to decide?
          </h3>
          <p className="md:text-[18px] text-[14px] text-[#BDC1C6] text-center ">
            Let’s discuss the possibilities and we would be happy to walk you
            through the requisite solution. We take pride in our market
            expertise and consumer satisfaction!{" "}
          </p>
          <div className=" w-fit rounded-full border-[1px] border-white py-[12px] px-[20px] text-white font-DMSans text-[16px] font-medium">
            Free Consultation
          </div>
        </div>

        <div className="w-full h-[1px] my-20 bg-[rgba(255,255,255,0.09)]" />

        <div className="flex flex-wrap justify-between w-full gap-[50px]">
          {/* Company Info */}
          <div className="w-full md:w-[25%]">
            <img
              className="md:w-[200px] w-[100px]"
              src="/Images/logo-2.png"
              alt="Buttar Logo"
            />
            <p className="text-[#BDC1C6] text-[16px] pt-5">
            We are service experts in the insurance market since 2006 . Our starting organisation as BEST DEAL INSURANCE in panipat haryana. And at this time a famous service provider with our 60000 satisfied customers . 
            </p>
          </div>

          {/* Footer Links */}
          <div className="md:w-[70%] w-full md:mt-0 mt-9  flex flex-col md:flex-row flex-wrap justify-evenly gap-x-[30px]">
            {/* Quick Links */}
            <div className="md:w-1/4 w-full flex flex-col gap-[15px]">
              <h3 className="text-[18px] text-white">Quick Links</h3>
              <div className="flex flex-col gap-[10px]">
                {/* {quickLinks.map((link, index) => (
                  <span href={link?.url}  key={index} className="text-[#BDC1C6] cursor-pointer text-[16px]">
                    {link?.name}
                  </span>
                ))} */}
                {quickLinks.map((link, index) => (
                  <a
                  
                    key={index}
                                onClick={() => handleNavClick(link)}

                    className="text-[#BDC1C6] cursor-pointer text-[16px]"
                    target="_blank" // Optional: opens in new tab
                    rel="noopener noreferrer" // Optional: for security if target="_blank"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Our Services */}
            {/* <div className="md:w-1/4 w-full md:mt-0 mt-9  flex flex-col gap-[15px]">
              <h3 className="text-[18px] text-white">Our Services</h3>
              <div className="flex flex-col gap-[10px]">
                {ourServices.map((service, index) => (
                  <a
                    href={service?.url}
                    key={index}
                    className="text-[#BDC1C6] cursor-pointer text-[16px]"
                    target="_blank" // Optional: opens in new tab
                    rel="noopener noreferrer"
                    // key={index}
                    // className="text-[#BDC1C6]  text-[16px]"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div> */}

            {/* Get In Touch */}
            <div className="md:w-1/4 w-full flex  flex-col md:mt-0 mt-9  gap-[15px]">
              <h3 className="text-[18px] text-white">Quick Links</h3>

              {getInTouch.map((item, index) => (
                <div
                  key={index}
                  className="  flex justify-start items-center gap-[10px]"
                >
                  <div className="w-[30px]">{item.icon}</div>

                  <span className="text-[#BDC1C6] text-[16px]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="flex flex-col md:mt-0 mt-9 gap-[15px]">
              <h3 className="text-[18px] text-white">Social Media</h3>
              <div className="flex flex-col gap-[10px]">
                {socialMedia.map((social, index) => (
                  <a
                    href={social?.url}
                    key={index}
                    className="text-[#BDC1C6] cursor-pointer text-[16px]"
                    target="_blank" // Optional: opens in new tab
                    rel="noopener noreferrer"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row flex-wrap justify-between items-center  pt-[80px] pb-[25px]">
          <span className="text-[#BDC1C6]  md:text-left text-center md:text-[15px] text-[13px] font-light">
            All rights reserved © 2019 | Easy Insurance Group of Companies
          </span>
          <div className="flex gap-[20px] md:mt-0 mt-5 ">
            <Link
            to="/privacy-policy "
              className="text-[#BDC1C6] cursor-pointer  md:text-[14px] text-[12px] font-light"
            >
              Privacy Policy
            </Link>
            <Link  to="/terms-use" className= "text-[#BDC1C6] cursor-pointer   md:text-[14px] text-[12px] font-light">
           
              Terms Of Use
            </Link>
          </div>
        </div>
      </div></div>
  )
}

export default Fotter