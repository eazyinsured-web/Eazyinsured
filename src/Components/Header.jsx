import React, { useEffect, useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { AiOutlineMail } from "react-icons/ai";
import { MdLocalPhone, MdOutlineFacebook, MdOutlineWatchLater } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa6';




const navLinks = ["Home", "Services", "About", "Contact Us"];

function Header() {
      const [menuOpen, setMenuOpen] = useState(false);
      const navigate=useNavigate();

      useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [menuOpen]);

  const [scrollTarget, setScrollTarget] = useState(null);



//   const handleNavClick = (id) => {
//     if (location.pathname !== '/')
//      {
      
      
//     }
//   const el = document.getElementById(id);
//   if (el) {
//     el.scrollIntoView({ behavior: 'smooth' });
//     setMenuOpen(false); 
//   }
// };


 const handleNavClick = (id) => {
  setMenuOpen(false); 
    if (location.pathname !== '/') {
      setScrollTarget(id); // Save ID to scroll to after redirect
      navigate('/'); // Redirect to home
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div>
     <div className="bg-white w-full px-4 md:px-[140px] py-2 flex flex-col md:flex-row md:justify-around md:items-center gap-3 text-center md:text-left">
  
  {/* Timing */}
  <div className="md:flex hidden  justify-center md:justify-start items-center gap-2 cursor-pointer">
    <MdOutlineWatchLater className="text-[#39dc75]" />
    <span className="text-[14px] md:text-[16px] hover:text-[#39dc75]">
      Monday - Sunday, 24 x 7 Open
    </span>
  </div>

  {/* Email */}
  <div className="md:flex hidden  justify-center md:justify-start items-center gap-2 cursor-pointer">
    <AiOutlineMail className="text-[#39dc75]" />
    <span className="text-[14px] md:text-[16px] hover:text-[#39dc75]">
      support@eazyinsured.com
    </span>
  </div>

  {/* Phone */}
  <div className="flex justify-center md:justify-start items-center gap-2 cursor-pointer">
    <MdLocalPhone className="text-[#39dc75]" />
    <span className="text-[12px] md:text-[16px] hover:text-[#39dc75]">
      +91 9812795100
    </span>
  </div>
</div>


    <div className="w-full flex justify-between items-center px-[20px] md:px-[100px]  py-[15px] bg-primary select-none">
      <a
     
     
     target="_blank"
    
  >

      <img
     
        className="md:w-[200px] w-[80px]"
        src="/Images/logo-2.png"
        alt="Logo"
      />
      </a>


     <div className="hidden md:flex gap-[30px]">
  {navLinks.map((link, index) => (
    <span
      key={index}
      onClick={() => handleNavClick(link)}
      className={`relative font-DMSans text-[20px] font-normal cursor-pointer transition duration-300
        ${scrollTarget === link ? "text-[#39dc75]" : "text-white"} 
        hover:text-[#39dc75]`}
    >
      {link}
      {/* Underline animation */}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-[#39dc75] transition-all duration-300 
          ${scrollTarget === link ? "w-full" : "group-hover:w-full"}`}
      ></span>
    </span>
  ))}
</div>
<div className=' md:block hidden  w-[70px] '>
  <div className='flex gap-[10px]'>
  <MdOutlineFacebook className='text-[28px] text-[#5bff97] ]  hover:text-[30px] cursor-pointer' />
    <FaInstagram  className='text-[28px] text-[#5bff97] ]  hover:text-[30px] cursor-pointer' />
  </div>



{/* 
      <div className='flex flex-row items-center justify-center gap-[12px] bg-primary rounded-full text-white px-[20px] py-[12px]  ' onClick={()=>{
        handleNavClick("Schedule")
      }}>
       
          <LuPhoneCall/>
    
       
          <span>9812795100</span> 
      </div> */}
</div>
      {/* Mobile Hamburger */}
      <div className="block md:hidden">
        <HiMenu
          className="text-white text-[30px] cursor-pointer"
          onClick={() => setMenuOpen(true)}
        />
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-60 z-40"></div>

          <div
            className={`
          fixed top-0 right-0 h-full w-[65%] bg-primary z-50 flex flex-col gap-8 shadow-lg
          transform ${menuOpen ? "translate-x-0" : "translate-x-full"} 
          transition-transform duration-300 ease-in-out
        `}
          >
            <HiX
              className="absolute top-5 right-5 text-[#5bff97]  text-[32px] cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />

            <div className=" flex flex-col ml-6 mt-[80px] gap-[15px]">
              {navLinks.map((link, index) => (
                <span
                  key={index}
                  
                  onClick={() => handleNavClick(link)}
                  className="text-white hover:text-[#5bff97] font-DMSans text-[20px] font-normal cursor-pointer"
                >
                  {link}
                </span>
              ))}
          <div className=' md:hidden block'>


      <div className='flex flex-row items-center justify-center gap-[12px] w-fit bg-primary rounded-full text-white px-[15px] py-[6px]  ' onClick={()=>{
        handleNavClick("Schedule")
      }}>
       
          {/* <LuPhoneCall/> */}
    
       
          <span className=''></span> 
      </div>
</div>
            </div>
          </div>
        </>
      )}
    </div>
    </div>
  );
}

export default Header
